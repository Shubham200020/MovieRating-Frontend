import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { InsertMovieComponent } from './insert-movie/insert-movie.component';

import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},

    {path:"dashbord",component:DashboardComponent},
];
