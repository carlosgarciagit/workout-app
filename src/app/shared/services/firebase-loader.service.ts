import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, take, tap, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Program } from '../models/program';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoaderService {

  private programCollection;

  constructor(private db: AngularFirestore) {
    this.programCollection = this.db.collection('programs');
   }

  public getMyProgramsIds(): Observable<string[]> {
    const userId = JSON.parse(localStorage.getItem('user')).uid;

    return this.db.collection('users').doc(userId).get().pipe(
      take(1),
      map(res => res.data().programIds)
    );
  }

  public getMyPrograms(): Observable<Program[]> {
      return this.getMyProgramsIds().pipe(
        take(1),
        switchMap(ids => {
          const programs = [];

          ids.forEach(id => {
            this.programCollection.doc(id).get().pipe(
              take(1),
            ).subscribe(
              program => programs.push(program.data())
            );
          });

          return of(programs);
        })
      );
  }

  public getFollowedPrograms(userId: string): Observable<Program[]> {
    return of([]);
  }
}
