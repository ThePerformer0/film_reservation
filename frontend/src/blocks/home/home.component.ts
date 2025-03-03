import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from "../../features/movies/movie-list/movie-list.component";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MovieListComponent, MovieListComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
