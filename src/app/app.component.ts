import { RandomID } from './glopal/RandomID';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(){
    for(let i = 0;i < 1000;i++){
      console.log(RandomID.generatePushID());
    }
  }
}
