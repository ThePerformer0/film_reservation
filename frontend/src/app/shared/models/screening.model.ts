import { Movie } from "./movie.model";

export interface Screening {
  id: number;
  movie: Movie;
  start_time: string;
  end_time: string;
  room_capacity: number;
}
