import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [


  { path: "", redirectTo: 'home', pathMatch:"full" },


    {path: "home", component:HomeComponent},
    { path: "login", component: LoginComponent },
    {path: "detail/:id", component: FilmDetailComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
