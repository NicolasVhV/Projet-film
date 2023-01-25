import { Component, OnInit } from '@angular/core';
import { MovieApiService } from "src/app/services/movie-api.service";
import { ImageModule } from "primeng/image";
import { map, timer } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  image! : [];
  trendingMovieResult: any = [
  ];

  constructor(private service : MovieApiService) { }



  ngOnInit(): void {
    this.trendingData();



  }


  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');

      let data:any = result.results

      this.image = data


      console.log(this.image);


      this.trendingMovieResult = result.results;
      console.log(this.trendingMovieResult[0].poster_path);
      console.log(this.trendingMovieResult[0].backdrop_path);

      // this.trendingMovieResult
    });
  }

  $film = timer(0, 1000).pipe(map((i: number) => this.image[i % this.image.length]))
}
