import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Exercise } from '../models/exercise';
import { Workout } from '../models/workout';
import { Program } from '../models/program';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUploaderService {

  private exerciseCollection;
  private workoutCollection;
  private programCollection;

  constructor(db: AngularFirestore) {
    this.exerciseCollection = db.collection('exercises');
    this.workoutCollection = db.collection('workouts');
    this.programCollection = db.collection('programs');
  }

  addProgram(program: Program) {
    this.programCollection.add(program)
    .then(console.log('Successfully posted the program'))
    .catch(error => console.log(error));
  }

  addWorkout(workout: Workout) {
    this.workoutCollection.add(workout)
    .then(console.log('Successfully posted the workout'))
    .catch(error => console.log(error));
  }

  addExercise(exercise: Exercise) {
    this.exerciseCollection.add(exercise)
    .then(console.log('Successfully posted the exercise'))
    .catch(error => console.log(error));
  }
}
