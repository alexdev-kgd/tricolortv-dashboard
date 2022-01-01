import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/shared/animations';
import { WINDOW_SIZE } from 'src/app/shared/constants/windowSize';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass'],
  animations: [
    slideInAnimation
  ]
})
export class DefaultComponent implements OnInit {
  isDisabled = false;

  menuOpened = true;

  ngOnInit(): void {
    this.checkWindowSize();
  }

  checkWindowSize(): void {
    const outerWidth = window.outerWidth;
    outerWidth < WINDOW_SIZE.TABLET ? this.isDisabled = true : this.isDisabled = false;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
