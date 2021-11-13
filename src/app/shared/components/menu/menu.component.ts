import { MatMenu } from '@angular/material/menu';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  @ViewChild('menu') matMenu: MatMenu;
  
  @Input() overlapTrigger;

  cancelClick = (ev: MouseEvent) => ev.stopPropagation();
}
