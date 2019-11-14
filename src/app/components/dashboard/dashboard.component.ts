import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FirebaseLoaderService } from '../../shared/services/firebase-loader.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { AddProgramModalComponent } from '../add-program-modal/add-program-modal.component';
import { FirebaseUploaderService } from '../../shared/services/firebase-uploader.service';
import { Exercise } from '../../shared/models/exercise';
import { Program } from '../../shared/models/program';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  myPrograms$: Observable<Program[]>;
  followedPrograms$: Observable<Program[]>;

  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    public loaderService: FirebaseLoaderService
  ) { }

  ngOnInit() {
    this.myPrograms$ = this.loaderService.getMyPrograms();

    this.followedPrograms$ = this.loaderService.getFollowedPrograms('userId');
  }

  async openAddProgramModal() {
    const modal = await this.modalController.create({
      component: AddProgramModalComponent
    });
    return await modal.present();
  }

  refreshPage() {
    this.myPrograms$ = this.loaderService.getMyPrograms();
  }

}
