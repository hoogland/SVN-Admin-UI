import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../../player';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  member: Player;

  constructor(
    public MemberService: MemberService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.MemberService.getPlayer(+params['id']))
      .subscribe((member) => {
        this.member = member
        console.log(this.member)
      });
  }

  save(): void {
    this.MemberService.updatePlayer(this.member)
      .then(() => this.goBack());
  }

  goBack(): void {
    console.log("terug");
    this.location.back;
  }

}
