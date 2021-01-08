import { Injectable } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';


@Injectable({
  providedIn: 'root'
})
export class PaginatorLabelService extends MatPaginatorIntl {

  constructor() {
    super();
  }

  translateMatPaginator = (paginator: MatPaginator) => {
    paginator._intl.firstPageLabel = '<custom label here>';
    paginator._intl.itemsPerPageLabel = '<custom label here>';
    paginator._intl.lastPageLabel = '<custom label here>';
    paginator._intl.nextPageLabel = '<custom label here>';
    paginator._intl.previousPageLabel = '<custom label here>';
  }

  getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) return `0 / ${length}`;

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${page + 1} страница - ${endIndex} статей`;
  }
}
