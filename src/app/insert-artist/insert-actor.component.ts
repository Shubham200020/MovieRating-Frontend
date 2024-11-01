import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-actor',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NavbarComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './insert-actor.component.html',
  styleUrl: './insert-actor.component.css'
})
export class InsertArtistComponent implements OnInit{
  indicator:boolean=false
  photo:any=[]
  role:any=[]
  featuredImage!: File;
  constructor(private http:HttpClient)
  {
   
  }
  ngOnInit(): void {
    
  }
  getData(){
    this.http.get("http://localhost:8080/art/get-role").subscribe(
      (data)=>{
        alert("upload")
        this.role=data;
       
      },
      (error)=>{
        console.log("error"+error)
      }
    )  
  }
  sub(fm:FormGroup){
    this.indicator=true

  }

  onFileSelected(event: any): void {
    const formData = new FormData();
    formData.append('imag',event.target.files[0]);
    this.http.post("http://localhost:8080/img/post-img",formData).subscribe(
      (data)=>{
        alert("upload")
        this.photo=data;
        this.mydata.get("images")?.setValue(this.photo);
      },
      (error)=>{
        console.log("error"+error)
      }
    )  
  }
  mydata:FormGroup=new FormGroup({
    id:new FormControl(null),
    name:new FormControl('',[Validators.required]),
    images:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.maxLength(1000),Validators.required]),
    artRole:new FormControl('',[Validators.required])
  });
  get getName():any{
    return this.mydata.get("name")
  }
  get getImage():any{
    return this.mydata.get("images")
  }
  get getDob():any{
    return this.mydata.get("dob")
  }
  get getCountry():any{
    return this.mydata.get("country")
  }
  get getCity():any{
    return this.mydata.get("city")
  }
  get getAbout():any{
    return this.mydata.get('about')
  }

}

