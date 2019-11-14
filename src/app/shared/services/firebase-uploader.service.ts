import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Exercise } from '../models/exercise';
import { Workout } from '../models/workout';
import { Program } from '../models/program';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUploaderService {

  private programCollection;

  constructor(private db: AngularFirestore) {
    this.programCollection = db.collection('programs');
  }

  postProgram(program: Program) {
    this.programCollection.add(program)
    .then(res => {
      const programId = res.id;
      const userId = JSON.parse(localStorage.getItem('user')).uid;

      this.addProgramToUser(userId, programId);
    })
    .catch(error => console.log(error));
  }

  addProgramToUser(userId: string, programId: string) {
    this.db.collection('users').doc(userId).get().pipe(
      take(1),
      map(res => res.data().programIds),
    ).subscribe( ids => {
        this.db.collection('users').doc(userId).update({
          programIds: [...ids, programId]
        });
      }
    );
  }
}
