import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "fa92318fba75328adf863601e2ea4d3e"

  // handleError:string


  // GetTrendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

 // searchmovive
 getSearchMovie(data: any): Observable<any> {
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data}`);
}


// getmoviedatails
getMovieDetails(data: any): Observable<any> {
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}&language=fr-FR`)
}

  //GetupComingMovie
  upComingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/upcoming?api_key=${this.apikey}`)
  }



}
