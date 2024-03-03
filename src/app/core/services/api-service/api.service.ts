import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}
  public get<TResponse>(type: string, params?: any): Observable<TResponse> {
    return this.http.get<TResponse>(environment.BASE_URL + type, {
      params: { ...params },
    });
  }
}
