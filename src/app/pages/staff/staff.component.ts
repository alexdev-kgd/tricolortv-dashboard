import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
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
export class StaffComponent {
  // MatPaginator Inputs
  length = 50;

  pageSize = 10;
}
