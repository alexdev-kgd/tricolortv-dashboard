import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaginatorStaffService extends MatPaginatorIntl {
  translatedText: string[];

  constructor(private translate: TranslateService) {
    super();
  }

  
  getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) return `0 / ${length}`;
    
    this.translate.get('PAGINATOR.PAGES').pipe(
      mergeMap((sourceValue) => this.translate.get('PAGINATOR.STAFF').pipe(
        map((value) => {
          return [sourceValue, value];
        })
      )),
    ).subscribe((value) => {
      this.translatedText = value;
    })

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${page + 1} ${ this.translatedText[0] } ` +
            `- ${endIndex} ${ this.translatedText[1] }`;
  }
}
