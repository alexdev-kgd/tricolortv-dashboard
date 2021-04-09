import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
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
export class ModulesComponent {
  // MatPaginator Inputs
  length = 50;

  pageSize = 10;
}
