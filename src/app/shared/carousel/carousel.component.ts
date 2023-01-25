import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieApiService } from "src/app/services/movie-api.service";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  image! : [];
  trendingMovieResult: any = [];
  latestMovieResult:any =[];


  responsiveOptions!: {}[]

  constructor(private service: MovieApiService) {}

  ngOnInit(): void {

    this.trendingData();
    this.latestMovieApiData();


    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');

      let data:any = result.results

      this.image = data


      console.log(this.image);
      this.trendingMovieResult = result.results;

      // this.trendingMovieResult
    });
  }

  latestMovieApiData(){
    this.service.trendingMovieApiData().subscribe((result) => {

    let data:any = result.results

    this.image = data

    this.latestMovieResult = result.results
    })
  }
}
