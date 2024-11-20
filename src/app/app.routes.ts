import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { InsertMovieComponent } from './insert-movie/insert-movie.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowActorProfileComponent } from './show-actor-profile/show-actor-profile.component';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { InsertUserDemoComponent } from './insert-user-demo/insert-user-demo.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { RatemovieComponent } from './ratemovie/ratemovie.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"dashbord",component:DashboardComponent},
    {path:"usradd",component:InsertUserComponent},
    {path:"artisrblog",component:ShowActorProfileComponent},
    {path:"rating",component:RatemovieComponent},
    {path:"**",component:NotFountComponent}
];
