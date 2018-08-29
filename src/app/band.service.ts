import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Band } from './models/Band';
import { BANDS } from './mocks/mock-bands';
import { DIRECTIONS, RATING_INTERVALL } from './common/constants';

const initialBands = BANDS.slice();

@Injectable({
  providedIn: 'root'
})
export class BandService {
  bands$ = new BehaviorSubject<Band[]>(BANDS);

  constructor() { }

  getBands(): BehaviorSubject<Band[]> {
    return this.bands$;
  }

  deleteById(bandId: number): void {
    const bandsData = this.bands$.value;
    const newBandsData = bandsData.filter(band => {
      return band.id !== bandId;
    });
    this.bands$.next(newBandsData);
  }

  rateBand(bandId: number, direction: string) {
    const bandsDataCopy = this.bands$.value.slice();
    const bandToUpdate = bandsDataCopy.find(band => {
      return band.id === bandId;
    });
    const bandIndex = bandsDataCopy.indexOf(bandToUpdate);
    if (bandToUpdate.rating > RATING_INTERVALL.BOTTOM && direction === DIRECTIONS.DOWN) {
      bandToUpdate.rating --;
    }
    if (bandToUpdate.rating < RATING_INTERVALL.TOP && direction === DIRECTIONS.UP) {
      bandToUpdate.rating ++;
    }
    bandsDataCopy[bandIndex] = bandToUpdate;
    this.bands$.next(bandsDataCopy);
  }

  reset(): void {
    this.bands$.next(BANDS);
  }
}
