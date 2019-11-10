import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-program-modal',
  templateUrl: './add-program-modal.component.html',
  styleUrls: ['./add-program-modal.component.scss'],
})
export class AddProgramModalComponent {

  public myForm: FormGroup;
  public workoutCount = 1;

  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.myForm = formBuilder.group({
      name: ['', Validators.required],
      workouts: this.formBuilder.array([
        this.initWorkout(),
    ])
    });
  }

  addWorkout() {
    const control = this.myForm.controls.workouts as FormArray;
    control.push(this.initWorkout());
  }

  initWorkout() {
    return this.formBuilder.array([
      this.initExercise(),
    ]);
  }

  initExercise() {
    return this.formBuilder.group({
        name: ['', Validators.required],
        reps: [],
        sets: [],
        duration: [],
        superSet: []
    });
  }

  removeWorkout(control) {
    this.myForm.removeControl(control.key);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
