import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent implements OnInit{
  role:any=[]
  data:any=[]
  constructor(private http:HttpClient){

  }
  mydata:FormGroup=new FormGroup({
    id:new FormControl(0),
    name:new FormControl('',[Validators.required]),
    images:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    conpass:new FormControl('',[Validators.required]),
    authrity:new FormControl('',[Validators.required]),
    
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
  get getAuth():any{
    return this.mydata.get("authrity")
  }
  get getId():any{
    return this.mydata.get("id")
  }
  updateData(data:any,aut:string){
    //alert(aut)
    this.getAuth.setValue(aut);
    this.getAuth.setValue(aut);
    this.getEmail.setValue(data.email);
    this.getPassword.setValue(data.password);
    this.getId.setValue(data.id);
    this.getName.setValue(data.name);
    this.getDob.setValue(data.dob);
    this.getImage.setValue(data.images)
   
    this.http.post("http://localhost:8080/user/",this.mydata.value).subscribe(
      (data)=>{
        
      alert(aut)
      this.getllData()
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
    this.http.get("http://localhost:8080/user/").subscribe(
      (data)=>{
        this.data=data
      },
      (error)=>{

      }
    )
  }
  deleteData(data:any){
    if(confirm("Are You Sure Delete")){
    this.http.post("http://localhost:8080/user/delete",data).subscribe(
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
