import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BandService } from '../band.service';
import { Band } from '../models/Band';
import { DIRECTIONS, RATING_INTERVALL, RATING_STARS_COUNT } from '../common/constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  bands$: BehaviorSubject<Band[]>;
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  ratingStars: any;
  starsCount = RATING_STARS_COUNT;
  displayedColumns$ = new BehaviorSubject<string[]>([
    'id',
    'name',
    'actions',
    'rating',
    'stars'
  ]);
  constructor(private bandService: BandService) { }

  ngOnInit() {
    this.bands$ = this.bandService.getBands();
    this.bands$.subscribe(changedBandData => {
      this.tableDataSource$.next(Object.values(changedBandData));
      this.ratingStars = changedBandData.reduce((acc, band) => {
        acc[band.id] = {
          full: Array(band.rating),
          empty: Array(this.starsCount - band.rating)
        };
        return acc;
      }, Object.create(null));
    });
  }

  deleteBand(bandId: number): void {
    this.bandService.deleteById(bandId);
  }

  rateUp(bandId: number): void {
    this.bandService.rateBand(bandId, DIRECTIONS.UP);
  }

  rateDown(bandId: number): void {
    this.bandService.rateBand(bandId, DIRECTIONS.DOWN);
  }

  resetTable(): void {
    this.bandService.reset();
  }
}
