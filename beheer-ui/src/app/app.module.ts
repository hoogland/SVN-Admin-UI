import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Main
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

//Different views
import { ToolComponent } from './tool/tool.component';

//Routing
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MembersComponent } from './members/members.component';

import { PlayerService } from './members/member.service';
import { SeasonService } from './season.service';
import { TeamService } from './external/team.service';
import { TeamMatchService } from './external/team-match.service';
import { MemberComponent } from './members/member/member.component';
import { ExternalMatchesComponent } from './external/external-matches/external-matches.component';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolComponent,
    MembersComponent,
    MemberComponent,
    ExternalMatchesComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService,
    SeasonService,
    TeamService,
    TeamMatchService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { } 
