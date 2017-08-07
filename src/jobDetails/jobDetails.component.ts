import { Experience } from './../app/experience';
import { Component, Inject } from '@angular/core';
import { MdTabsModule, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-job-detail',
  templateUrl: './jobDetails.component.html',
  styleUrls: ['./jobDetails.component.css']
})
export class JobDetailsComponent {
    selectedJob: Experience;
}
