import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH_STORAGE_TOKEN } from '@shared/constants/auth';
import { ApiHttpClientService } from '@shared/services/api-http.client.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authData$ = new BehaviorSubject<any>(null);
  public isLogged$ = new BehaviorSubject<boolean>(false);

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(
    private apiHttpClient: ApiHttpClientService,
  ) { }

  public logIn(user: any): Observable<any> {
    return this.apiHttpClient.post<any>('Auth/AdminLogIn/', user, {headers: this.headers})
      .pipe(tap((response) => {
        if (this.isAuthResponseValid(response.data)) {
          this.saveLoginResponse(response.data);
          this.isLogged$.next(true);
          this.authData$.next(response.data);
        }
      }));
  }

  private isAuthResponseValid(response: any): boolean {
    return response != null && response.jwtToken != null && response.jwtToken !== '';
  }

  private saveLoginResponse(loginResponse: any): void {
    localStorage.setItem(AUTH_STORAGE_TOKEN, loginResponse);
  }

  private getLoginResponse(): any {
    return localStorage.getItem(AUTH_STORAGE_TOKEN);
  }

}
