import { Injectable } from '@angular/core';
import { ProgramCardInfo } from './program-card';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoaderService {

  constructor() { }

  public getProgramCards(userId: string): Observable<ProgramCardInfo[]> {
    return of([
      {name: 'Fat Loss Program', description: 'Melt away fat with this intense cardio routine!'} as ProgramCardInfo,
      {name: 'Mass Gainer 5 Week Program', description: 'Make gainz with this killer workout set'} as ProgramCardInfo
    ]);
  }
}
