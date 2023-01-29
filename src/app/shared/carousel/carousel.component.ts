import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  trendingMovieResult: [] = [];
  latestMovieResult: [] = [];
  upComingMovieResult: [] = [];
  responsiveOptions!: {}[];

  constructor(private service: MovieApiService) {}

  ngOnInit(): void {
    this.trendingData();
    this.upComingMovie();
    // this.getById()

    //Responsive PrimeNG
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  //GetTrendingMovieData

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  //GetUpComingMovieData

  upComingMovie() {
    this.service.upComingMovieApiData().subscribe((result) => {
      console.log('upcomingdata', result);
      this.upComingMovieResult = result.results;
    });
  }


  // getById(){

  //    const id =this.service.getById(id).subscribe((result) =>{
  //     console.log();
  //     this.imageId = result
  //   })

  //   }

  }

