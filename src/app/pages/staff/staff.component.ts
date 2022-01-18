import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { FontSizeService } from '@shared/services/font-size.service';
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
export class StaffComponent implements OnInit {
  // MatPaginator Inputs
  length = 50;

  pageSize = 10;

  fontSizeValue: string;

  constructor(private fontSizeService: FontSizeService) {
  }

  ngOnInit(): void {
    this.fontSizeValue = this.fontSizeService.getFontSizeClass();
  }
}
