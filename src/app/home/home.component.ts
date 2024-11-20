import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ScrollImgComponent } from "../scroll-img/scroll-img.component";
import { MoviesComponent } from "../movies/movies.component";
import { FooterComponent } from "../footer/footer.component";
import { SingersComponent } from "../singers/singers.component";
import { ActorsComponent } from "../actors/actors.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ScrollImgComponent, MoviesComponent, FooterComponent, SingersComponent, ActorsComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
