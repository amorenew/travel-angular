import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {

  constructor(private frameworkConfigService:FrameworkConfigService) { 
    console.log(frameworkConfigService);
  }

  ngOnInit() {
  }

}