import {Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { MenuItem } from "../../services/menu.service";

@Component({selector: 'fw-menu-item', templateUrl: './menu-item.component.html', styleUrls: ['./menu-item.component.scss']})

export class MenuItemComponent implements OnInit {
  @Input() item : MenuItem;

  constructor() {}

  ngOnInit() {}

}
