import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  private readonly API_URL = '/vehicles.json';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
}
