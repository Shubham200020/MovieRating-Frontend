import { Component } from '@angular/core';
import { ActorsComponent } from "../actors/actors.component";
import {  InsertArtistComponent } from "../insert-artist/insert-actor.component";
import { InsertMovieComponent } from "../insert-movie/insert-movie.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ActorsComponent, InsertArtistComponent, InsertMovieComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  artistIn:boolean=false;
  movieIn:boolean=false;
  singerIn:boolean=false;

  artIn(){
    this.artistIn=true;
    this.movieIn=false;
    this.singerIn=false;

  }
  movIn(){
    this.artistIn=false;
    this.movieIn=true;
    this.singerIn=false;
  }
  singIn(){
    this.artistIn=false;
    this.movieIn=false;
    this.singerIn=true;
  }

}
