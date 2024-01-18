import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { HomeComponent } from '@pages/home/home.component';
import { StatisticsComponent } from '@pages/statistics/statistics.component';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { SectionComponent } from '@pages/settings/section/section.component';
import { SettingsComponent } from '@pages/settings/settings.component';
import { StaffComponent } from '@pages/staff/staff.component';
import { CommentsComponent } from '@pages/comments/comments.component';
import { ModulesComponent } from '@pages/modules/modules.component';

import { DefaultComponent } from './default.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StatisticsComponent,
    ArticlesComponent,
    StaffComponent,
    ModulesComponent,
    CommentsComponent,
    SettingsComponent,
    SectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatDialogModule,
    MatSidenavModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  providers: [],
})
export class DefaultModule {}
