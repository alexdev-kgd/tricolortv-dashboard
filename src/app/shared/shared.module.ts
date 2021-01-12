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
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LinearChartComponent,
    SearchComponent
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
    MatInputModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LinearChartComponent,
    SearchComponent
  ]
})
export class SharedModule { }
