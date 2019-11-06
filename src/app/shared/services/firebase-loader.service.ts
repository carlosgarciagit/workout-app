import { Injectable } from '@angular/core';
import { ProgramInfo } from './program-info';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoaderService {

  constructor() { }

  public getMyPrograms(userId: string): Observable<ProgramInfo[]> {
    return of([
      {name: 'Fat Loss Program', description: 'Melt away fat with this intense cardio routine!'} as ProgramInfo,
      {name: 'Mass Gainer 5 Week Program', description: 'Make gainz with this killer workout set'} as ProgramInfo
    ]);
  }

  public getFollowedPrograms(userId: string): Observable<ProgramInfo[]> {
    return of([
      {name: 'Omars Fat Gaining Program', description: 'Follow Omars program to make you fatter'} as ProgramInfo
    ]);
  }
}
