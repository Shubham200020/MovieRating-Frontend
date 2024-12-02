import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-img',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './scroll-img.component.html',
  styleUrl: './scroll-img.component.css'
})
export class ScrollImgComponent implements OnInit{
  data:any=[]
  public count:number=0
  num:any[]=[];
 
  constructor(private http:HttpClient){
    this.getNumber()
    
  }

  ngOnInit(): void {
    
    this.getllData()
    

  }

  getllData(){
    
    this.http.get("http://localhost:8080/movie/acceptdata").subscribe(
      (data)=>{
        this.data=data
      },
      (error)=>{

      }
    )
  }
  getNumber(){
 
    this.http.get<number>("http://localhost:8080/movie/getcount").subscribe(
      (data)=>{
       this.count=data;
       
      },
      (error)=>{

      }
    ) 
    
  }
  arry(count:number){
   if(this.num.length==0)
    for(let i=1;i<count;i++){
     
      this.num.push(i)
    }
  }

}
