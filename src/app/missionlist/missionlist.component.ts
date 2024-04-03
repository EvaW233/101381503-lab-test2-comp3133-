import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceXAPIService } from '../spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = []; 
  selectedMission: Mission | null = null; 
  @Output() missionSelected = new EventEmitter<Mission>();

  constructor(private spacexService: SpaceXAPIService) { }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.missions = data;
    });
  }

  selectMission(mission: Mission): void {
    this.selectedMission = mission;
    this.missionSelected.emit(mission);
  }
}
