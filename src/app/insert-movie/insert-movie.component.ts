import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-movie',
  standalone: true,
  imports: [CommonModule
    ,HttpClientModule,ReactiveFormsModule],
  templateUrl: './insert-movie.component.html',
  styleUrl: './insert-movie.component.css'
})
export class InsertMovieComponent {
  data:any=[]
  featuredImage!: File;
  wideimage:any=[]
  normalimage:any=[]
  constructor(private http:HttpClient)
  {

  }
  mydata:FormGroup=new FormGroup({
    id:new FormControl(0),
    name:new FormControl('',[Validators.required]),
    poster:new FormControl('',[Validators.required]),
    widePoster:new FormControl('',[Validators.required]),
    releseDate:new FormControl('',[Validators.required])
  });
  get getName():any{
    return this.mydata.get("name")
  }
  get getPoster():any{
    return this.mydata.get("poster")
  }
  get getwidePoster():any{
    return this.mydata.get("widePoster")
  }
  get getReleseDate():any{
    return this.mydata.get("releseDate")
  }

  onFileSelected(event: any): void {
    const formData = new FormData();
    formData.append('imag',event.target.files[0]);
    this.http.post("http://localhost:8080/img/post-img",formData).subscribe(
      (data)=>{
        alert("upload")
        this.data=data
        this.getPoster.setValue(this.data)
      },
      (error)=>{
        console.log("error"+error)
      }
    )
    
  }
  onFileSelectedBid(event: any): void {
    const formData = new FormData();
    formData.append('imag',event.target.files[0]);
    this.http.post("http://localhost:8080/img/post-img",formData).subscribe(
      (data)=>{
        alert("upload")
        this.normalimage=data
        this.getwidePoster.setValue(this.normalimage);
      },
      (error)=>{
        console.log("error"+error)
      }
    )
    
  }
  sub(data:FormGroup){
    this.http.post("http://localhost:8080/movie/",data.value).subscribe(
      (data)=>{
      alert('Insert movie')
    },
    (error)=>{
      console.log(error)
    }
  )

  }
}

