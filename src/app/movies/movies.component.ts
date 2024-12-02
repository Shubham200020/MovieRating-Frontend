import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  
  data:any=[]
  constructor(private http:HttpClient){
    this.getData()
  }
  getData(){
    this.http.get("http://localhost:8080/movie/").subscribe(
      (data)=>{
        this.data=data
      },
      (error)=>{
        console.log("error"+error)
      }
    )
  }

}
