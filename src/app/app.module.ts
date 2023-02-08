import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import{ButtonModule} from 'primeng/button'
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule  } from "primeng/galleria";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { LoginComponent } from './login/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from "./services/movie-api.service";
import { ImageModule } from "primeng/image";
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SearchComponent } from './shared/search/search.component';
import { AutoCompleteModule } from "primeng/autocomplete";
import { ListboxModule } from "primeng/listbox";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PasswordModule } from "primeng/password";
import { CreateUserComponent } from './create-user/create-user.component';
import {CardModule} from 'primeng/card';
import { TokenInterceptorProvider } from './shared/user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    LoginComponent,
    FilmDetailComponent,
    SearchComponent,
    CreateUserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    SwiperModule,
    CommonModule,
    FormsModule,
    NgImageSliderModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    MatInputModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    ImageModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    AutoCompleteModule,
    ListboxModule,
    MatAutocompleteModule,
    PasswordModule,
    CardModule


  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'auto' },


    },
    TokenInterceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
