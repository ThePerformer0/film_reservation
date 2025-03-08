import { Component, OnInit, inject } from '@angular/core';
import { ScreeningsService } from '../service/screenings.service';
import { Screening } from '../../../shared/models/screening.model';
import { FormatDateDirective } from '../../../shared/directives/format-date.directive';
import { FormatTimeDirective } from '../../../shared/directives/format-time.directive';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-screenings-list',
  templateUrl: './screenings-list.component.html',
  styleUrls: ['./screenings-list.component.css'],
  imports: [FormatDateDirective, FormatTimeDirective, CommonModule],
})
export class ScreeningsListComponent implements OnInit {

  screenings: Screening[] = [];

  screeningsService = inject(ScreeningsService);

  ngOnInit() {
    this.screeningsService.getScreenings().subscribe((data) => {
      this.screenings = data;
    });
  }

}
