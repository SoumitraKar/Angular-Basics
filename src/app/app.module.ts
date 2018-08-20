import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftPanelComponent } from './leftpanel/leftpanel.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LeftmenuitemComponent } from './leftmenuitem/leftmenuitem.component';
import { TodoComponent } from './todo/todo.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { Es6Component } from './es6/es6.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

@NgModule({
  declarations: [
    NavbarComponent,
    LeftPanelComponent,
    AppComponent,
    RightpanelComponent,
    LeftmenuitemComponent,
    TodoComponent,
    AboutmeComponent,
    ChildComponent,
    PipeComponent,
    Es6Component,
    AngularMaterialComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatSortModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatNativeDateModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path : 'rightpanel',
        component : RightpanelComponent
      },
      {
        path : 'todo',
        component : TodoComponent
      },
      {
        path : 'services',
        component : AboutmeComponent
      },
      {
        path : 'es6',
        component : Es6Component
      },
      {
        path : 'AngularMaterial',
        component : AngularMaterialComponent
      },
      {
        path: '**',
        redirectTo: '/rightpanel'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
