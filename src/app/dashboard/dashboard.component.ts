import { Component, OnInit } from '@angular/core';
import { ActorsComponent } from "../actors/actors.component";
import {  InsertArtistComponent } from "../insert-artist/insert-actor.component";
import { InsertMovieComponent } from "../insert-movie/insert-movie.component";
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { ShowArtistComponent } from "../show-artist/show-artist.component";
import { InsertUserComponent } from "../insert-user/insert-user.component";
import { ShowUserComponent } from "../show-user/show-user.component";
import { ShowProfileComponent } from "../show-profile/show-profile.component";
import { Router } from '@angular/router';
import { fakeAsync } from '@angular/core/testing';
import { ShowMoviesComponent } from "../show-movies/show-movies.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ActorsComponent, InsertArtistComponent, InsertMovieComponent, CommonModule, ShowArtistComponent, InsertUserComponent, ShowUserComponent, ShowProfileComponent, ShowMoviesComponent],
  providers: [CookieService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  per:string=""
  navBar:boolean=true
  name=""
  constructor(private cookies:CookieService,private router: Router ){

  }
  ngOnInit(): void {
   // this.showProfile()
    if(this.cookies.check('per')){
      this.per=this.cookies.get("per");
     
    }
      
   if(!this.cookies.check('email') && !this.cookies.check('password'))
    this.login()
   else{

    this.name=this.cookies.get("name");
   }
  }
  navVer()
  {
    this.navBar=!this.navBar
  }
  login(){
    this.router.navigate(['/login']);
  }
  showMovie() {
    this.cookies.set("per","showMovie",{ expires: 7, path: '/' });
    this.per=this.cookies.get("per");
    }
  showProfile(){
    
    this.cookies.set("per","showProfile",{ expires: 7, path: '/' });
    this.per=this.cookies.get("per");
  }
  artIn(){

    this.cookies.set("per","artistInsert",{ expires: 7, path: '/' });
    this.per=this.cookies.get("per");
  }
  gerConsole(){
    this.cookies.set("per","",{ expires: 7, path: '/' });
   
    this.per=this.cookies.get("per");
  }
  movIn(){
    this.cookies.set("per","movieInsert",{ expires: 7, path: '/' });
    this.per=this.cookies.get("per") ;  

  }
  InUsr(){
    this.cookies.set("per","usrIn",{ expires: 7, path: '/' });
    this.per=this.cookies.get("per") ; 
  }
  artList(){
    this.cookies.set("per","showArtists",{ expires: 7, path: '/' });
    this.per=this.cookies.get("per") ;
  }
  usrList(){
    this.cookies.set("per","showUser",{ expires: 7, path: '/' });
    this.per=this.cookies.get("per") ;
  }

}
