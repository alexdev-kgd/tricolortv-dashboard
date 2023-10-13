import { BindClickEventDirective } from './../layouts/default/default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { SearchComponent } from './components/search/search.component';
import { LinearChartComponent } from './components/linear-chart/linear-chart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { MenuComponent } from './components/menu/menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SmallStatisticsContainerComponent } from './components/small-statistics-container/small-statistics-container.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LinearChartComponent,
    SearchComponent,
    DatepickerComponent,
    InputNumberComponent,
    MenuComponent,
    BindClickEventDirective,
    PieChartComponent,
    BarChartComponent,
    SmallStatisticsContainerComponent
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
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LinearChartComponent,
    PieChartComponent,
    BarChartComponent,
    SearchComponent,
    MenuComponent,
    DatepickerComponent,
    InputNumberComponent,
    SmallStatisticsContainerComponent
  ],
})
export class SharedModule { }
