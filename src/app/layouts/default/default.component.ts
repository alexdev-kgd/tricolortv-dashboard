import { MediaMatcher } from '@angular/cdk/layout';
import { Component, Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '@shared/animations';
import { DEVICES, WINDOW_SIZE } from '@shared/constants/windowSize';

@Directive({
  selector: '[sidebarLink]'
})
export class BindClickEventDirective {
  constructor(private element: ElementRef, private defaultComponent: DefaultComponent) {}
  @HostListener('click') 
  onClick() {
    if(this.defaultComponent.checkWindowSize() === DEVICES.TABLET)
      this.defaultComponent.menuOpened = false;
  }
}

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass'],
  animations: [
    slideInAnimation
  ]
})
export class DefaultComponent implements OnInit {
  mobileQuery: MediaQueryList;

  isDisabled = false;

  public menuOpened = true;

  constructor(private media: MediaMatcher) {
    this.mobileQuery = this.media.matchMedia('(min-width: 768px)');
  }

  ngOnInit(): void {
    this.applyDeviceConfigs();
  }

  applyDeviceConfigs(): void {
    if(this.checkWindowSize() === DEVICES.TABLET) { 
      this.isDisabled = true;
      this.menuOpened = false;
    } else {
      this.isDisabled = false;
      this.menuOpened = true;
    }
  }

  checkWindowSize(): DEVICES {
    const outerWidth = window.outerWidth;
    if(outerWidth < WINDOW_SIZE.TABLET) return DEVICES.TABLET;
    return DEVICES.PC;
  }

  toggleMenu(event?: boolean): void {
    this.menuOpened = !this.menuOpened
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
