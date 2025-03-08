import { Component, NgModule, OnInit } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { MoviesService } from '../service/movies.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-movie-list-limited',
  templateUrl: './movie-list-limited.component.html',
  styleUrls: ['./movie-list-limited.component.css'],
  imports: [RouterLink, CommonModule],
  providers: [MoviesService]
})
export class MovieListLimitedComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data.slice(0, 6);  // Limitez à 6 films
    });
  }

}
