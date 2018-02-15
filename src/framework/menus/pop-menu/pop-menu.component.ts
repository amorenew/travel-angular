import {Component, OnInit, Input} from '@angular/core';
import {MenuService, MenuItem} from '../../services/menu.service';

@Component({selector: 'fw-pop-menu', templateUrl: './pop-menu.component.html', styleUrls: ['./pop-menu.component.scss']})
export class PopMenuComponent implements OnInit {

  @Input() menu : Array < MenuItem >;

  constructor(public menuService : MenuService) {}

  ngOnInit() {}

}
