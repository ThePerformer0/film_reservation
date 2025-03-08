import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListLimitedComponent } from "../../features/movies/movie-list-limited/movie-list-limited.component";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    MovieListLimitedComponent
],
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

  subscribeToNewsletter(event: Event): void {
    event.preventDefault();
    alert('Merci pour votre inscription à la newsletter !');
  }

}
