import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from './member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Player[];
  selectedMember: Player;

  constructor(
    private memberService : PlayerService
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  onSelect(member : Player){
    this.selectedMember = member
  }

  getMembers(): void {
    this.memberService.getPlayers().then(members => this.members = members);
  }

}
