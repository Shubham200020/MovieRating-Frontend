import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cast',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './add-cast.component.html',
  styleUrl: './add-cast.component.css'
})
export class AddCastComponent implements OnInit{
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
   
  }

}
