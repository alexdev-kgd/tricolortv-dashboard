import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'; 
import { RouterModule } from '@angular/router/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LinearChartComponent } from './components/linear-chart/linear-chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LinearChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LinearChartComponent
  ]
})
export class SharedModule { }
