import { Component } from '@angular/core';
import { Mission } from './models/mission';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMission: Mission | null = null;
  title = '101381503-lab-test2-comp3133';
  constructor() {}
}