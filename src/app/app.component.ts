import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './modal/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    coreCourse = COURSES[0]
    templateCourse = COURSES[1]
    ngrxCourse = COURSES[2]

    onCardSelected(course : Course) {
        console.log(" App component click - Parent Click", course)
    }
}
