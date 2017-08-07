import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdDialogModule } from '@angular/material';
import { EducationDetailsComponent } from '../educationDetails/educationDetails.component';
import { JobDetailsComponent } from '../jobDetails/jobDetails.component';
import { ProjectDetailsComponent } from '../projectDetails/projectDetails.component';


@NgModule({
  declarations: [
    AppComponent,
    EducationDetailsComponent,
    JobDetailsComponent,
    ProjectDetailsComponent
  ],
  entryComponents: [
    EducationDetailsComponent,
    JobDetailsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdDialogModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
