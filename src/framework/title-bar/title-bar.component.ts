import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService:ScreenService) { }

  ngOnInit() {
  }

}
