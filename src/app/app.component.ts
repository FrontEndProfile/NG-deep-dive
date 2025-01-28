import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './modal/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    courses = COURSES;


    @ViewChild('card1', {read: ElementRef})
    card1?: CourseCardComponent

    @ViewChild('card2', {read: ElementRef})
    card2?: CourseCardComponent

    @ViewChild('container')
    CardContainer?: ElementRef;


    onCardSelected(course : Course) {
        // console.log(" App component click - Parent Click", course)
        console.log("Card 1 : ",this.card1)
        console.log("Card 2 : ",this.card2)

        console.log("Card Container Elem: ",this.CardContainer)

    }
}
