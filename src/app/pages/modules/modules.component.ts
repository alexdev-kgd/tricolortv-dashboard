import { TranslationService } from '@services/translation.service';
import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PaginatorModulesService } from './paginator-modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: PaginatorModulesService
  }]
})
export class ModulesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // MatPaginator Inputs
  length = 50;

  pageSize = +localStorage.getItem('modulesCount') || 10;

  modules = [{
    title: 'Меню',
  },{
    title: 'Меню 2',
  },{
    title: 'График',
  },{
    title: 'Логотип',
  },{
    title: 'Сайдбар',
  },{
    title: 'Меню',
  },{
    title: 'Меню 2',
  },{
    title: 'График',
  },{
    title: 'Логотип',
  },{
    title: 'Сайдбар',
  },{
    title: 'Меню',
  },{
    title: 'Меню 2',
  },{
    title: 'График',
  },{
    title: 'Логотип',
  },{
    title: 'Сайдбар',
  }]

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.modules);

  obs: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private translationService: TranslationService) {}

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.translationService.currentLanguage.subscribe(() => this.translationService.checkLanguage());
  }

  ngOnDestroy(): void {
    if(this.dataSource) this.dataSource.disconnect();
  }
}
