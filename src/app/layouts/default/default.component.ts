import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {

  menuOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
