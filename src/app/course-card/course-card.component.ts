import { Component, Input } from '@angular/core';
import { Course } from '../modal/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

    @Input({
        required : true
    })
    course: Course | undefined;
    constructor(){}

}
