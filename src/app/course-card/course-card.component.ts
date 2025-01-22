import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../modal/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
    @Input({
        required: true
    })
    course : Course | undefined;


    @Input()
    cardIndex : number | undefined;

    @Output()
    CardSelected = new EventEmitter<Course>();

    constructor(){}

    isImageVisible() {
       return this.course && this.course.iconUrl;
    }

    cardClasses(){
        if(this.course?.category == 'BEGINNER') {
            return ['beginner'];
        }
        return [];
    }
    onViewed() {
        console.log(" Click on card btn. - Child CLICK");
        this.CardSelected.emit(this.course);
    }


}
