import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Movie } from '../shared/models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private api: ApiService) {}

  getMovies(): Observable<Movie[]> {
    return this.api.get<Movie[]>('movies/');
  }

  getMovie(id: number): Observable<Movie> {
    return this.api.get<Movie>(`movies/${id}/`);
  }

}
