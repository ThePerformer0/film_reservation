import { Routes } from '@angular/router';
import { MovieListComponent } from '../features/movies/movie-list/movie-list.component';

export const routes: Routes = [
  { path: 'home', component: MovieListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
