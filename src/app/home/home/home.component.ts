import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { ImageModule } from 'primeng/image';
import { map, timer } from 'rxjs';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  image!: [];
  trendingMovieResult: any = [];
  artistsSpotify: any = [];
  artists!: [];
  constructor(private service: MovieApiService) {}

  ngOnInit(): void {
    this.trendingData();

    // this.getArtistsSpotify()
  }

  // getAritstsSpotify(){
  //   this.service.getArtistsSpotify().subscribe((result) => {
  //     let data:any = result.results
  // this.artists = data

  // this.artistsSpotify = result.results

  //   })
  // }



  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      let data: any = result.results;
      this.image = data;
      this.trendingMovieResult = result.results;
      // console.log("FILM/ " , this.trendingMovieResult)
    });
  }
}
