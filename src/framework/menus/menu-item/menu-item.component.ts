import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer,
  animate,
  trigger,
  transition,
  style
} from '@angular/core';
import {Input} from '@angular/core';
import {MenuItem, MenuService} from '../../services/menu.service';
import {Router, NavigationEnd} from '@angular/router';

@Component({selector: 'fw-menu-item', 
templateUrl: './menu-item.component.html', 
styleUrls: ['./menu-item.component.scss'],
animations:[
  trigger('visibilityChanged',[
    transition(':enter',[// :enter is alias to 'void => *'
    style({opacity:0}),
    animate(300,style({opacity:1}))
    ]),
    transition(':leave',[ // leave is alias to '* => void'
    animate(100,style({opacity:0}))
  ])
  ])
]
})

export class MenuItemComponent implements OnInit {
  @Input()item : MenuItem;
  @HostBinding('class.parent-is-popup')
  @Input()parentIsPopup = true;
  isActiveRoute = false;
  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(public router : Router, public menuService : MenuService, public elementRef : ElementRef, public render : Renderer) {}

  ngOnInit() {
    this.checkActiveRoute(this.router.url);
    this
      .router
      .events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.checkActiveRoute(event.url);
          // console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
        }
      });
  }
  checkActiveRoute(route : string) {
    this.isActiveRoute = (route === '/' + this.item.route);
  }
  @HostListener('click', ['$event'])
  onclick(event) : void {
    event.stopPropagation();
    if (this.item.submenu) {
      if (this.menuService.isVertical) {
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if (this.item.route) {
      // force horizontal menus to close by sending a mouseleave event
      const newEvent = new MouseEvent('mouseleave', {bubbles: true});
      this
        .render
        .invokeElementMethod(this.elementRef.nativeElement, 'dispatchEvent', [newEvent]);
      this
        .router
        .navigate([ this.item.route]);
        this.menuService.showingLeftSideMenu=false;
    }
  }

  onPopupMouseEnter(event) : void {
    if(!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event) : void {
    if(!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) : void {
    if(!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() : void {
    if(!this.menuService.isVertical) {
      if (this.item.submenu) {
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }
}
