import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  indicator:boolean=false
  selRole:any[]=[]
  photo:any=[]
  add="/usradd"
  role:any=[]
  cookieData:string=""
  featuredImage!: File;
  data:any=[]

  constructor(private http:HttpClient,private cookie:CookieService,private router: Router)
  {

  }
  
  
  mydata:FormGroup =new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])
  })
  get getEmail():any{
    return this.mydata.get('email')
  }
  get getPassword():any{
    return this.mydata.get('password')
  }
  sub(data:FormGroup){
    let params = new HttpParams();
    params.append("email",this.getEmail.value);
    params.append("password",this.getPassword.value);
    console.log(params)
    if(this.mydata.valid)
    this.http.post("http://localhost:8080/user/login",this.mydata.value).subscribe(
    (data)=>{
   
  
      this.data=data

      if(this.data!=null){
        alert("Login")
        this.cookie.set("email",this.getEmail.value,{ expires: 7, path: '/' });
        this.cookie.set("name",this.data.name,{ expires: 7, path: '/' });
        this.cookie.set("password",this.getPassword.value,{ expires: 7, path: '/' });
        this.router.navigate(['/dashbord']);
      }
      else{
        alert("Email or Passord something is wrong")
      }
      
    },
    (eror)=>{
      alert("error")
    }
    )
    else{
      alert("Some Data is Missing or invalid")
    }
  }
  create()
  {
    this.router.navigate([this.add]);
  }
}
