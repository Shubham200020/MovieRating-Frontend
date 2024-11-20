import { Component } from '@angular/core';
import { InsertUserComponent } from "../insert-user/insert-user.component";
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-insert-user-demo',
  standalone: true,
  imports: [InsertUserComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './insert-user-demo.component.html',
  styleUrl: './insert-user-demo.component.css'
})
export class InsertUserDemoComponent {
  constructor(private cookies:CookieService,private router: Router ){

  }
}
