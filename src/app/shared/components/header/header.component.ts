import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Input() menuOpened: boolean;

  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSidebar(): void {
    this.showSidebar.emit(!this.menuOpened);
  }

}
