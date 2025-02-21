import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { Movie } from '../../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api = inject(ApiService)

  getMovies(): Observable<Movie[]> {
    return this.api.get<Movie[]>('movies/');
  }

  getMovie(id: number): Observable<Movie> {
    return this.api.get<Movie>(`movies/${id}/`);
  }

}
