import { TranslationService } from '@services/translation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLanguage.subscribe(() => this.translationService.checkLanguage());
  }
}
