import { Inject, Injectable } from '@angular/core';
import { ApiHttpClientService } from '@shared/services/api-http.client.service';
import { Observable } from 'rxjs';
import { IArticle } from './domain/interfaces/Article.interface';
import { APP_CONFIG, AppConfig } from '@shared/config/app-config';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private apiHttpClient: ApiHttpClientService
  ) { }

  public loadList(params?: any): Observable<IArticle[]> {
    return this.apiHttpClient
      .get<IArticle[]>('Article/GetAll/', { params });
  }
}
