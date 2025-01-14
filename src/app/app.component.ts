import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NG-deep-dive';
  counter: number = 0;


  data = {
    tittle : 'Angular Deep Dive - Beginner to Advanced (Angular 19)'
  }


  KeyType(newTittle:string) {
    this.data.tittle = newTittle;
  }


  LogoTouch() {
    this.counter++;
    console.log("Clicked Time: ", this.counter)
  }

}
