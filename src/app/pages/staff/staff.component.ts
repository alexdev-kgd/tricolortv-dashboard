import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FontSizeService } from '@shared/services/font-size.service';
import { Observable } from 'rxjs';
import { PaginatorStaffService } from './paginator-staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: PaginatorStaffService
  }]
})
export class StaffComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // MatPaginator Inputs
  length = 50;

  pageSize = +localStorage.getItem('staffCount') || 10;

  fontSizeValue: string;

  staff = [{
    firstName: 'Иван',
    lastName: 'Иванов',
    occupy: 'Дилер компании "Триколор ТВ"',
    photo: 'assets/img/person.jpg'
  },{
    firstName: 'Иван',
    lastName: 'Иванов',
    occupy: 'Дилер компании "Триколор ТВ"',
    photo: 'assets/img/person.jpg'
  },{
    firstName: 'Иван',
    lastName: 'Иванов',
    occupy: 'Дилер компании "Триколор ТВ"',
    photo: 'assets/img/person.jpg'
  },{
    firstName: 'Иван',
    lastName: 'Иванов',
    occupy: 'Дилер компании "Триколор ТВ"',
    photo: 'assets/img/person.jpg'
  },{
    firstName: 'Иван',
    lastName: 'Иванов',
    occupy: 'Дилер компании "Триколор ТВ"',
    photo: 'assets/img/person.jpg'
  },{
    firstName: 'Иван',
    lastName: 'Иванов',
    occupy: 'Дилер компании "Триколор ТВ"',
    photo: 'assets/img/person.jpg'
  }];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.staff);

  obs: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private fontSizeService: FontSizeService) {
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.fontSizeValue = this.fontSizeService.getFontSizeClass();
  }

  ngOnDestroy(): void {
    if(this.dataSource) this.dataSource.disconnect();
  }
}
