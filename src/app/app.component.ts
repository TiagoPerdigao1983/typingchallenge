import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    console.log(value);
    this.enteredText = value;
  }
}

//display each character in the template, but color green if it's right, red if it's wrong and gray if a given character hasn't been entered yet
