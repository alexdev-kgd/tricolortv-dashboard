import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { StatisticsComponent } from 'src/app/pages/statistics/statistics.component';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';

import { StaffComponent } from 'src/app/pages/staff/staff.component';
import { ModulesComponent } from 'src/app/pages/modules/modules.component';
import { CommentsComponent } from 'src/app/pages/comments/comments.component';
import { DefaultComponent } from './default.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StatisticsComponent,
    ArticlesComponent,
    StaffComponent,
    ModulesComponent,
    CommentsComponent,
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
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [],
})
export class DefaultModule { }
