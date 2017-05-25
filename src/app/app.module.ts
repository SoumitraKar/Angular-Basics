import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftPanelComponent } from './leftpanel/leftpanel.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LeftmenuitemComponent } from './leftmenuitem/leftmenuitem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LeftPanelComponent,
    AppComponent,
    RightpanelComponent,
    LeftmenuitemComponent,
    DashboardComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path : 'rightpanel',
        component : RightpanelComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'aboutme',
        component : AboutmeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
