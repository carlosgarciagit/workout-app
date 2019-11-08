import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FirebaseLoaderService } from '../../shared/services/firebase-loader.service';
import { Observable } from 'rxjs';
import { ProgramInfo } from 'src/app/shared/services/program-info';
import { ModalController } from '@ionic/angular';
import { AddProgramModalComponent } from '../add-program-modal/add-program-modal.component';
import { FirebaseUploaderService } from '../../shared/services/firebase-uploader.service';
import { Exercise } from '../../shared/models/exercise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  myPrograms$: Observable<ProgramInfo[]>;
  followedPrograms$: Observable<ProgramInfo[]>;

  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    public loaderService: FirebaseLoaderService
  ) { }

  ngOnInit() {
    this.myPrograms$ = this.loaderService.getMyPrograms('userId');

    this.followedPrograms$ = this.loaderService.getFollowedPrograms('userId');
  }

  async openAddProgramModal() {
    const modal = await this.modalController.create({
      component: AddProgramModalComponent
    });
    return await modal.present();
  }

}
