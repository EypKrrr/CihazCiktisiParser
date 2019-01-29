import { Component } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sourceText = 'Input';

  RunParser(){
    console.log(this.sourceText+'!');
  }
}
