import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@shared/config/app-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpClientService {

  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
  ) { }

  public post<T>(relativePath: string, body: any | null, options?: any): Observable<T> {
    return this.httpClient.post(this.createUrl(relativePath), body, options) as unknown as Observable<T>;
  }

  public get<T>(relativePath: string, options?: any): Observable<T> {
    const _options = options || {};

    return this.httpClient.get(this.createUrl(relativePath), _options) as unknown as Observable<T>;
  }

  public put<T>(relativePath: string, body: any | null, options?: any): Observable<T> {
    return this.httpClient.put(this.createUrl(relativePath), body, options) as unknown as Observable<T>;
  }

  public delete<T>(relativePath: string, body?: any | null): Observable<T> {
    return this.httpClient.delete(this.createUrl(relativePath), {body: body || null}) as unknown as Observable<T>;
  }

  private createUrl(relativePath: string): string {
    return `${this.config.apiEndpoint}${relativePath}`;
  }
}
