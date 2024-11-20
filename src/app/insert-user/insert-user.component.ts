import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-user',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './insert-user.component.html',
  styleUrl: './insert-user.component.css'
})
export class InsertUserComponent {
  indicator:boolean=false
  selRole:any[]=[]
  photo:any=[]
  role:any=[]
  cookieData:string=""
  featuredImage!: File;
  data:any=[]

  constructor(private http:HttpClient)
  {

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
    id:new FormControl(0),
    name:new FormControl('',[Validators.required]),
    images:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    conpass:new FormControl('',[Validators.required]),

  });
 
  get getConPass():any{
    return this.mydata.get("conpass")

  }
  get getName():any{
    return this.mydata.get("name")
  }
  get getImage():any{
    return this.mydata.get("images")
  }
  get getDob():any{
    return this.mydata.get("dob")
  }
  get getPassword():any{
    return this.mydata.get("password")
  }
  get getEmail():any{
    return this.mydata.get("email")
  }


  onChandeConfPass(){
    console.log(this.getPassword.value)
    if(this.getPassword.value!=this.getConPass.value){
      this.getConPass.setErrors({'incorrect': true});
    }
    
  }

  sub(data:FormGroup){
   
    this.indicator=true;
    if(data.valid){
      this.http.post("http://localhost:8080/user/",data.value).subscribe(
        (data)=>{
          alert("Submit")
        },
        (error)=>{
          console.log("error"+error)
        }
      )  
    }
    else{
      
      alert("Something went wrong")
    }
  }
}
