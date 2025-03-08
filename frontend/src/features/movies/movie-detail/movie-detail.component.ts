import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../../../shared/models/movie.model';
import { ScreeningsService } from '../../screenings/service/screenings.service';
import { Screening } from '../../../shared/models/screening.model';
import { SharedModule } from '../../../shared/shared.module';
import { FormatTimeDirective } from '../../../shared/directives/format-time.directive';
import { FormatDateDirective } from '../../../shared/directives/format-date.directive';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  standalone: true,
  imports: [CommonModule, FormatDateDirective, FormatTimeDirective, SharedModule],
  providers: [],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie | undefined;
  @Input() isScheduled: boolean | undefined;
  screenings: Screening[] = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router,
    private screeningsService: ScreeningsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovie(id).subscribe((data) => {
      this.movie = data;
    });

    this.screeningsService.getScreeningsByMovie(id).subscribe((data) => {
      this.screenings = data;
      this.isScheduled = this.screenings.length > 0;
    });
  }

  reserveSession(movieId: number) {
    console.log('Réservation pour le film ID :', movieId);
  }

  goBack(): void {
    this.router.navigate(['/movies']);
  }
}
