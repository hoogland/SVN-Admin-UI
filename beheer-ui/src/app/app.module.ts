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
import { MemberComponent } from './members/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolComponent,
    MembersComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})

export class AppModule { } 
