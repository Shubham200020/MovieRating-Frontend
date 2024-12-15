import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-show-artist',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './show-artist.component.html',
  styleUrl: './show-artist.component.css'
})
export class ShowArtistComponent implements OnInit {
  role:any=[]
  data:any=[]
  constructor(private http:HttpClient,private cookie:CookieService,private route:Router){

  }
  getDethDate(date:any,deth:any){

    const dob= new Date(date)
    const dod= new Date(deth)
    
    let age = dod.getFullYear() - dob.getFullYear();
    const monthDiff = dod.getMonth() - dob.getMonth();
    const dayDiff = dod.getDate() - dob.getDate();
  
    // Adjust age if the current date has not yet reached the birth month or day
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
     return age
  }
  getDate(date:any){
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
  updateData(id:any,dta:any){
    this.http.get("http://localhost:8080/art/auth-by-id/"+id).subscribe(
      (data)=>{
        alert("Update");
        this.getllData();
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
 
  ngOnInit(): void {
 this.getData()
    this.getllData()
  }
  grtByFilter(data:string){
    this.http.get("http://localhost:8080/art/filter/"+data).subscribe(
      (data)=>{
        
        this.data=data;
       
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
  ClickPractice(id:string){
    this.cookie.set("actor",id,{ expires: 1, path: '/' });

   this.route.navigate(['/artisrblog'])
  }
  getData(){
    this.http.get("http://localhost:8080/art/get-role").subscribe(
      (data)=>{
        
        this.role=data;
       
      },
      (error)=>{

        console.log("error"+error)
      }
    )  
  }
  getllData(){
    this.http.get("http://localhost:8080/art/").subscribe(
      (data)=>{
        this.data=data
      },
      (error)=>{

      }
    )
  }
  deleteData(data:any){
    if(confirm("Are You Sure Delete")){
    this.http.post("http://localhost:8080/art/delete",data).subscribe(
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
