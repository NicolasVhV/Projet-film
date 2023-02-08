import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Subject, Observable, distinctUntilChanged, debounceTime, switchMap , BehaviorSubject} from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchTerms$ = new BehaviorSubject<string|null>(null);
// movie$!: Observable<any>
movieResult:any[] = []
selectedMovie:any;
movieDetailResult:any

// test:any[]=[{name : 'tutu'}, {name:'toto'}]

//     https://image.tmdb.org/t/p/original


  constructor(private service : MovieApiService, private router : ActivatedRoute,private routerNav:Router, private http : HttpClient) { }

  ngOnInit(): void {

    this.searchTerms$.subscribe((res:any)=>{
      if(res){

        this.service.getSearchMovie(res).subscribe(
          {
            next:(res)=>{

              let myResult = []
              myResult = res.results
              this.movieResult = []

              myResult.forEach((elem:any) => {

                let title: string = elem.title
                if(this.searchTerms$.value){

                  if(title.startsWith(this.searchTerms$.value.charAt(0).toUpperCase())){
                    console.log(elem);
                    console.log("------------------------------")
                    let temp ={title : elem.title, picture : elem.backdrop_path, id:elem.id }
                    this.movieResult.push(temp)

              this.getMovie(temp.id);
                  }
                }
              });





            },
            error:(err:any)=> console.log(err)
          }
        )
      }
    })
  }

  getSearch(data : any){
      this.service.getSearchMovie(data).subscribe(( x: any) =>{
      })

  }

  search(data : any){
     this.searchTerms$.next(data)
  }

  filterMovie(event:any){
  let stringSearch = event.query
    this.search(stringSearch)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.movieDetailResult = await result;

    });
  }

  getMovieDetails(event:any)
  {
  if(event!=undefined)
  {
    console.log("navigate")
    window.location.href =(`/detail/${event.id}`);

  }



  }

}
