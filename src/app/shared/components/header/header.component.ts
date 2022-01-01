import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSidebar(): void {
    this.showSidebar.emit(true);
  }

}
