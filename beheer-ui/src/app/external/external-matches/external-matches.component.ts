import { Component, OnInit } from '@angular/core';

import { SeasonService } from '../../season.service';
import { Season } from '../../season';

@Component({
  selector: 'app-external-matches',
  templateUrl: './external-matches.component.html',
  styleUrls: ['./external-matches.component.scss']
})
export class ExternalMatchesComponent implements OnInit {

  constructor(private seasonService : SeasonService) { 
  }

  ngOnInit() {
  }
}
