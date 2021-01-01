import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { StatisticsComponent } from 'src/app/pages/statistics/statistics.component';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';

import { ChartService } from 'src/app/pages/chart.service';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StatisticsComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
  ],
  providers: [
    ChartService
  ]
})
export class DefaultModule { }
