import { HttpClient, HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { CommentsComponent } from '@pages/comments/comments.component';
import { HomeComponent } from '@pages/home/home.component';
import { ModulesComponent } from '@pages/modules/modules.component';
import { SettingsComponent } from '@pages/settings/settings.component';
import { StaffComponent } from '@pages/staff/staff.component';
import { StatisticsComponent } from '@pages/statistics/statistics.component';
import { AppComponent } from './app/app.component';
import { DefaultComponent } from './app/layouts/default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from './environments/environment';
import { AppConfigModule } from '@shared/config/app-config.module';

if (environment.production) {
  enableProdMode();
}

export default function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage' },
      },
      {
        path: 'stats',
        component: StatisticsComponent,
        data: { animation: 'StatsPage' },
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        data: { animation: 'ArticlesPage' },
      },
      {
        path: 'staff',
        component: StaffComponent,
        data: { animation: 'StaffPage' },
      },
      {
        path: 'modules',
        component: ModulesComponent,
        data: { animation: 'ModulesPage' },
      },
      {
        path: 'comments',
        component: CommentsComponent,
        data: { animation: 'CommentsPage' },
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: { animation: 'SettingsPage' },
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom([HttpClientModule, BrowserAnimationsModule]),
    importProvidersFrom([AppConfigModule]),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
        defaultLanguage: 'ru',
      })
    ),
    { // Removes bottom space from MatFormField component
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
});
