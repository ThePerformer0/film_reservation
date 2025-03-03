import { Routes } from '@angular/router';
import { HomeComponent } from '../blocks/home/home.component';
import { MovieDetailComponent } from '../features/movies/movie-detail/movie-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
