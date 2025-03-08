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
  moviesService =  inject(MoviesService);

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
      console.log(data)
    });
  }

  movieSelected(movie: Movie) {
    console.log('Film sélectionné :', movie);
    this.router.navigate(['movie', movie.id]);
  }

}
