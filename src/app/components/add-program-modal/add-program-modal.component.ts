import { Component, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { FirebaseUploaderService } from '../../shared/services/firebase-uploader.service';
import { convertFormToProgram } from '../../shared/form-converter';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-program-modal',
  templateUrl: './add-program-modal.component.html',
  styleUrls: ['./add-program-modal.component.scss'],
})
export class AddProgramModalComponent {

  public addProgramForm: FormGroup;
  public workoutCount = 1;

  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private uploader: FirebaseUploaderService,
    private router: Router
  ) {
    this.addProgramForm = formBuilder.group({
      programName: ['', Validators.required],
      programDesc: ['', Validators.required],
      workouts: this.formBuilder.array([
        this.initWorkout(),
    ])
    });
  }

  submitProgram() {
    const program = convertFormToProgram(this.addProgramForm);
    this.uploader.postProgram(program);

    this.modalCtrl.dismiss();
  }

  addWorkout() {
    const control = this.addProgramForm.controls.workouts as FormArray;
    control.push(this.initWorkout());
  }

  addExercise(workout: FormGroup) {
    const exercises = workout.controls.exercises as FormArray;
    exercises.push(this.initExercise());
  }

  initWorkout() {
    return this.formBuilder.group({
      workoutName: ['', Validators.required],
      exercises: this.formBuilder.array([
        this.initExercise(),
      ])
    });
  }

  initExercise() {
    return this.formBuilder.group({
        exerciseName: ['', Validators.required],
        reps: [],
        sets: [],
        duration: []
    });
  }

  removeWorkout(index: number) {
    const workoutArray = this.addProgramForm.controls.workouts as FormArray;

    workoutArray.removeAt(index);
  }

  removeExercise(workout: FormGroup, index: number) {
    const exerciseArray = workout.controls.exercises as FormArray;

    exerciseArray.removeAt(index);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
