import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent {
  @Input() isDarkMode: boolean = false;
  @Input() latinLetters: boolean = false;

  get logoSrc(): string {
    const baseSrc = '../../assets/img/logo';
    const suffix = this.isDarkMode ? '_light' : '';
    const languageSuffix = this.latinLetters ? '_en' : '';
    return `${baseSrc}${suffix}${languageSuffix}.png`;
  }

  get altText(): string {
    return this.latinLetters ? 'tricolortv_en' : 'tricolortv';
  }
}
