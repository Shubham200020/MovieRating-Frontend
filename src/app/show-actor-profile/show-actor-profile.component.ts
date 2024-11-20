import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-show-actor-profile',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './show-actor-profile.component.html',
  styleUrl: './show-actor-profile.component.css'
})
export class ShowActorProfileComponent implements OnInit{
  data:any=[]
  constructor(private http:HttpClient,private cookies:CookieService){

  }
  ngOnInit(): void {
    if(this.cookies.check("actor")){
      this.findById(this.cookies.get("actor"))
    }
  }
  findById(id:string){
    this.http.get("http://localhost:8080/art/get-by-id/"+id).subscribe(
      (data)=>{
      this.data=data
        },
      (error)=>{
        console.log("error"+error)
      }
    )  
  }
}
