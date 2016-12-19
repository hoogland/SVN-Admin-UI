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
  newMember = new Player();

  constructor(
    private memberService : PlayerService
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  onSelect(member : Player){
    this.selectedMember = member
  }
  
  createMember(): void {
    this.memberService.createPlayer(this.newMember)
      .then(player =>{
        this.getMembers();
        this.newMember = new Player();
      });
  }

  getMembers(): void {
    this.memberService.getPlayers().then(members => this.members = members);
  }

}
