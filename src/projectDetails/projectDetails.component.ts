import { Projects } from './../app/projects';
import { Component, Inject } from '@angular/core';
import { MdTabsModule, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-detail',
  templateUrl: './projectDetails.component.html',
  styleUrls: ['./projectDetails.component.css']
})
export class ProjectDetailsComponent {
    selectedProject: Projects;
}
