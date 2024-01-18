import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent {
  @Input() isVisible = false;
  @Input() mode: 'center' | 'fullscreen' = 'center';
  @Input() diameter = '80';

  public get containerClassNames(): string {
    switch (this.mode) {
      case 'fullscreen':
        return 'full-screen';
      case 'center':
      default:
        return 'flex justify-center items-center';
    }
  }
}
