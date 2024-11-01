import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-movie',
  standalone: true,
  imports: [CommonModule
    ,HttpClientModule],
  templateUrl: './insert-movie.component.html',
  styleUrl: './insert-movie.component.css'
})
export class InsertMovieComponent {
  data:any=[]
  featuredImage!: File;
  constructor(private http:HttpClient)
  {

  }
  onFileSelected(event: any): void {
    const formData = new FormData();
    formData.append('imag',event.target.files[0]);
    this.http.post("http://localhost:8080/img/post-img",formData).subscribe(
      (data)=>{
        alert("upload")
        this.data=data
      },
      (error)=>{
        console.log("error"+error)
      }
    )
    
  }

}

