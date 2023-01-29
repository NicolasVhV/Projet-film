import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) { }

  baseurl = " https://api.spotify.com";
  apikey = "BQDSLkaNmAYvAWXfTOd5_gr-2-GkIk8H2RxS9fEwPcsiYFto-_YiXOTrLDYiH6eJ2MpbkIJ_BBg8trCb17N70qJCggs4xP6S0Uiv0VVu0NK7uTzcdWIypQhRaLfR4nXAP_PzelmJm0G4i6FU1j2-Lw2FqLVnMDRjHBoBG9JX3bELpys_FQ"

  //getArtists
  getArtistsSpotify(): Observable<any>{
    return this.http.get(`${this.baseurl}/artists`)
  }
}


