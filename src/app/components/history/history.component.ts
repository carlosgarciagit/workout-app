import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  goToWorkoutHistory() {
    console.log("GO TO WORKOUT HISTORY");
    // need to take in parameter to pass in the right data
    this.router.navigate(['tabs/home']);
  }

}
