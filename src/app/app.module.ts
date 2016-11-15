import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TestComponent } from './test.component';
import { HeaderComponent } from './header/header.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TestComponent,
    HeaderComponent,
    CreateReservationComponent,
    ScheduleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // TODO: Below path's main purpose, is to demonstrate functionality
      { path: '', component: TestComponent },
      { path: 'create-reservation', component: CreateReservationComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
