import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.css'
})
export class ActorsComponent implements OnInit{
  data:any=[]
  constructor(private http:HttpClient,private cookie:CookieService,private route:Router){

  }
  ngOnInit(): void {
  this.getActorData();
  }

  getActorData(){
    this.http.get("http://localhost:8080/art/acc/art").subscribe(
      (data)=>{
        this.data=data
      },
      (error)=>{

      }
    )
  }
  ClickPractice(id:string){
    this.cookie.set("actor",id,{ expires: 1, path: '/' });

   this.route.navigate(['/artisrblog'])
  }
}
