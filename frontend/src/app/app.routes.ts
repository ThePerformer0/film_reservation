import { Routes } from '@angular/router';
import { HomeComponent } from '../blocks/home/home.component';
import { MovieDetailComponent } from '../features/movies/movie-detail/movie-detail.component';
import { ScreeningsListComponent } from '../features/screenings/screenings-list/screenings-list.component';
import { MovieListComponent } from '../features/movies/movie-list/movie-list.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'screenings', component: ScreeningsListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
