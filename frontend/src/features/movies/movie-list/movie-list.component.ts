import { CommonModule } from '@angular/common';
import { Movie } from '../../../shared/models/movie.model';
import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [CommonModule, CardModule],
  providers: [MoviesService]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  router = inject(Router);

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  movieSelected(movie: Movie) {
    this.router.navigate(['/movies', movie.id]);
  }

}
