import { ThemeService } from '@services/theme.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './layouts/default/default.module';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [
    RouterOutlet,
    HttpClientModule,
    DefaultModule,
    CommonModule,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'tricolortv-dashboard';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.checkTheme();
    this.themeService.checkDarkMode();
  }
}
