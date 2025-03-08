import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Observable } from 'rxjs';
import { Screening } from '../../../shared/models/screening.model';
@Injectable({
  providedIn: 'root'
})
export class ScreeningsService {
  api = inject(ApiService)

  getScreenings(): Observable<Screening[]> {
    return this.api.get<Screening[]>('screenings/');
  }

  getScreeningsByMovie(movieId: number): Observable<Screening[]> {
    return this.api.get<Screening[]>(`screenings/by_movie/?movie=${movieId}`);
  }
}
