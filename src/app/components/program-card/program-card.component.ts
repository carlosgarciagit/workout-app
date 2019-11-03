import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
})
export class ProgramCardComponent implements OnInit {

  @Input()
  programName: string;

  @Input()
  programDesc: string;

  constructor() { }

  ngOnInit() {}

}
