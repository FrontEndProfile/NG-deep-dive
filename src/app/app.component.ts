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
    @ViewChild('title')
    titleElement!: ElementRef;

    constructor(){
    }



    ngAfterViewInit(): void {
        debugger
        console.log('AfterViewInit executed');
        console.log('AfterViewInit executed');
        this.titleElement.nativeElement.style.color = 'red';
        this.titleElement.nativeElement.textContent = 'Title Updated After View Initialized';
      }

    onCardSelected(course : Course) {
        // console.log(" App component click - Parent Click", course)
        // console.log("Card 1 : ",this.card1)
        // console.log("Card 2 : ",this.card2)

        // console.log("Card Container Elem: ",this.CardContainer)

    }
}
