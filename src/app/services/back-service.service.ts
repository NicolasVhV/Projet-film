import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackServiceService {

  baseUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  testConnection(data:any): Observable<any>{
    return this.http.post(this.baseUrl+"/user/connection", data)
  }
}
