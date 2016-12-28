import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolComponent } from '../tool/tool.component';
import { MembersComponent } from '../members/members.component';
import { MemberComponent } from '../members/member/member.component';
import { ExternalComponent } from '../external/external.component';
import { ExternalMatchesComponent } from '../external/external-matches/external-matches.component';
import { ExternalMatchComponent } from '../external/external-match/external-match.component';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id', component: MemberComponent },
  // { path: 'config',  component: DashboardComponent },
  // { path: 'config/seasons',  component: seasonsComponent },
  // { path: 'config/seasons/:id',  component: seasonComponent },
  // { path: 'intern',  component: DashboardComponent },
  {
    path: 'extern',
    component: ExternalComponent,
    children: [
      { path: 'seasons/:seasonId/teams/:teamId/matches', component: ExternalMatchesComponent },
      { path: 'seasons/:seasonId/teams/:teamId/matches/:teamMatchId', component: ExternalMatchComponent },
    ]
  },
  { path: 'tools', component: ToolComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
