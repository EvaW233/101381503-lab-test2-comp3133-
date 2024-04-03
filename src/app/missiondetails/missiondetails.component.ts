import { Component, Input, OnInit } from '@angular/core';
import { SpaceXAPIService } from '../spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  @Input() mission: Mission | null = null;
  missionDetails: Mission | null = null;

  constructor(private spacexService: SpaceXAPIService) { }

  ngOnInit(): void {
    if (this.mission) {
      const flightNumber = Number(this.mission.flight_number); 
      this.spacexService.getMissionForDetails(flightNumber).subscribe((data: Mission) => {
        this.missionDetails = data;
      });
    }
  }
}
