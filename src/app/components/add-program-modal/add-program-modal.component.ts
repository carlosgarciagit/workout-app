import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-program-modal',
  templateUrl: './add-program-modal.component.html',
  styleUrls: ['./add-program-modal.component.scss'],
})
export class AddProgramModalComponent {

  constructor(
    public modalCtrl: ModalController
  ) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
