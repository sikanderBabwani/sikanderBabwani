import { ProjectDetailsComponent } from './../projectDetails/projectDetails.component';
import { Projects } from './projects';
import { JobDetailsComponent } from './../jobDetails/jobDetails.component';
import { Experience } from './experience';
import { EducationDetailsComponent } from './../educationDetails/educationDetails.component';
import { Component } from '@angular/core';
import { Education } from './education';
import {MdTabsModule, MdDialog, MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogRefSchools: MdDialogRef<EducationDetailsComponent>;
  dialogRefJobs: MdDialogRef<JobDetailsComponent>;
  dialogRefProjects: MdDialogRef<ProjectDetailsComponent>;
  constructor(public dialog: MdDialog) {}

   title = 'Sikander Babwani\'s Portfolio!';
    schools: Education[] = [
      {id: 1, name: 'Pennsylvania State University', degree: 'Master of Science',
       major: 'Informtion Systems', datesAttented: 'Aug 2014 - May 2016',
       gpa: '3.91/4.00'},
       {id: 2, name: 'College of Engineering Pune', degree: 'Bachelor of Technology',
       major: 'Informtion Technology', datesAttented: 'Aug 2008 - May 2013',
       gpa: '6.27/10.00'}
    ];
    jobs: Experience[] = [
      {id: 1, name: 'GeoDecisions'},
      {id: 2, name: 'DNV GL'},
      {id: 3, name: 'FinIQ Consulting'}
    ];
    projects: Projects[] = [
      {id: 1, name: 'Global Lion Mentor WebApp'},
      {id: 2, name: 'Kick in for Kids'},
      {id: 3, name: 'Brownstone Cafe'}
    ];
    selectedSchool: Education;
    selectedJob: Experience;
    selectedProject: Projects;

    onSelectSchool(school: Education): void {
      this.dialogRefSchools = this.dialog.open(EducationDetailsComponent);
      this.dialogRefSchools.componentInstance.selectedSchool = school;
    }

    onSelectJob(job: Experience): void {
      this.dialogRefJobs = this.dialog.open(JobDetailsComponent);
      this.dialogRefJobs.componentInstance.selectedJob = job;
    }

    onSelectProject(project: Projects): void {
      this.dialogRefProjects = this.dialog.open(ProjectDetailsComponent);
      this.dialogRefProjects.componentInstance.selectedProject = project;
    }

    onSelectAward(id: number): void {
      if (id === 1) {
        window.open('assets/images/msisAward.jpg');
      } else if (id === 2) {
        window.open('assets/images/betaGammaSigma.jpg');
      } else if (id === 3) {
        window.open('assets/images/ibmCertificate.jpg');
      }
    }
}
