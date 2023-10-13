import { TranslationService } from '@services/translation.service';
import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  @ViewChild(MenuComponent, {static: true}) menuComponent: MenuComponent;

  value = ""; // Search value

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLanguage.subscribe(() => this.translationService.checkLanguage());
  }
}
