import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-show-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-profile.component.html',
  styleUrl: './show-profile.component.css'
})
export class ShowProfileComponent implements OnInit {
  data:any=[]
  loginInd:boolean=false
  email:string=""
  password=""
  constructor(private cookie:CookieService ,private http:HttpClient){

  }
  ngOnInit(): void {
   
    if(this.cookie.check("email") && this.cookie.check("password")){
      this.email=this.cookie.get("email");
      this.password=this.cookie.get("password");
    
      this.loginData()
      this.loginInd=true
    }
    
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
  mydata:FormGroup =new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])
  });
  get getEmail():any{
    return this.mydata.get('email')
  }
  get getPassword():any{
    return this.mydata.get('password')
  }
  loginData(){
    this.getEmail.setValue(this.email);
    this.getPassword.setValue(this.password);
    this.http.post("http://localhost:8080/user/login",this.mydata.value).subscribe(
      (data)=>{
    
        this.data=data
      
        
      },
      (eror)=>{
        alert("error")
      }
      )
  }
}
