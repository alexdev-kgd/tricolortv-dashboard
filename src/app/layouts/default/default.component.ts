import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass'],
  animations: [
    slideInAnimation
  ]
})
export class DefaultComponent implements OnInit {

  menuOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
