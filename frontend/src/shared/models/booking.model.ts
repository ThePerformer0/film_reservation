import { Screening } from "./screening.model";

export interface Booking {
  id: number;
  user_id: number;
  screening: Screening;
  seats_booked: number;
}
