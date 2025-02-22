import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../../../shared/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovie(id).subscribe((data) => {
      this.movie = data;
    });
  }
}
