import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { UserGuardGuard } from './shared/user-guard.guard';

const routes: Routes = [


  { path: "", redirectTo: 'home', pathMatch:"full" },


    {path: "home", component:HomeComponent},
    { path: "login", component: LoginComponent },
    {path: "detail/:id", component: FilmDetailComponent},
    {path: "createUser" ,component: CreateUserComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
