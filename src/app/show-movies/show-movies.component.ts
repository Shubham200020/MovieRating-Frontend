import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-movies',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './show-movies.component.html',
  styleUrl: './show-movies.component.css'
})
export class ShowMoviesComponent implements OnInit{
  role:any=[]
  data:any=[]
  constructor(private http:HttpClient){
  }
  updateHome(id:any,dta:any){
    this.http.get("http://localhost:8080/movie/authhome/"+id+"/"+dta).subscribe(
      (data)=>{
        alert("Update");
        this.getllData();
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
  updateData(id:any,dta:any){
    this.http.get("http://localhost:8080/movie/auth/"+id+"/"+dta).subscribe(
      (data)=>{
        alert("Update");
        this.getllData();
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
 
  getDate(date:any):any{
    const todatDate=new Date();
    const dob= new Date(date)
    let age = todatDate.getFullYear() - dob.getFullYear();
    const monthDiff = todatDate.getMonth() - dob.getMonth();
    const dayDiff = todatDate.getDate() - dob.getDate();
  
    // Adjust age if the current date has not yet reached the birth month or day
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
     return age
  }
  ngOnInit(): void {
 this.getData()
    this.getllData()
  }
  grtByFilter(data:string){
    this.http.get("http://localhost:8080/user/"+data).subscribe(
      (data)=>{
        
        this.data=data;
       
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
  getData(){
    this.http.get("http://localhost:8080/user/authority").subscribe(
      (data)=>{
        this.role=data;
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
  getllData(){
    this.http.get("http://localhost:8080/movie/").subscribe(
      (data)=>{
        this.data=data
      },
      (error)=>{

      }
    )
  }
  deleteData(data:any){
    if(confirm("Are You Sure Delete")){
    this.http.post("http://localhost:8080/movie/delete",data).subscribe(
      (data)=>{
       
        this.getllData()
      },
      (error)=>{
       
        this.getllData()
      }
    )
  }
  else{
    alert("Not Delete")
  }

  }
}
