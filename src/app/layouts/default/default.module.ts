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

import { HomeComponent } from 'src/app/pages/home/home.component';
import { StatisticsComponent } from 'src/app/pages/statistics/statistics.component';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';
import { SectionComponent } from 'src/app/pages/settings/section/section.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { StaffComponent } from 'src/app/pages/staff/staff.component';
import { CommentsComponent } from 'src/app/pages/comments/comments.component';

import { ModulesComponent } from 'src/app/pages/modules/modules.component';
import { DefaultComponent } from './default.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

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
    ReactiveFormsModule
  ],
  providers: [],
})
export class DefaultModule { }
