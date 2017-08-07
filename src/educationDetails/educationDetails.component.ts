import { Component, Inject } from '@angular/core';
import { Education } from '../app/education';


@Component({
  selector: 'app-education-detail',
  templateUrl: './educationDetails.component.html',
  styleUrls: ['./educationDetails.component.css']
})
export class EducationDetailsComponent {
    selectedSchool: Education;
}
