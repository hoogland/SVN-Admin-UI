import { Component, OnInit } from '@angular/core';

import { Season } from '../season';
import { SeasonService } from '../season.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  seasons: Season[];

  constructor(
    public seasonService : SeasonService
  ) { }

  ngOnInit() {
    this.seasonService.getSeasons;
  }
}
