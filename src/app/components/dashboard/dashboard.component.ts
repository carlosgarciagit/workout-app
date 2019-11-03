import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FirebaseLoaderService } from '../../shared/services/firebase-loader.service';
import { Observable } from 'rxjs';
import { ProgramCardInfo } from 'src/app/shared/services/program-card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  programCardInfo$: Observable<ProgramCardInfo[]>;

  constructor(
    public authService: AuthService,
    public loaderService: FirebaseLoaderService
  ) { }

  ngOnInit() {
    this.programCardInfo$ = this.loaderService.getProgramCards('userId');
  }

}
