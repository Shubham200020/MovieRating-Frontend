import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
dummy: any;
  constructor(private route: ActivatedRoute,private router: Router,private cookie:CookieService){

  }
  loginDetels(){
    this.cookie.delete("email")
    this.cookie.delete("password")
    this.cookie.delete("per")
  }
  login(){
    this.router.navigate(['/login']);
  }
  dashboard(){
    this.router.navigate(['/dashbord']);
  }

}
