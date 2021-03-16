import { Component } from '@angular/core';
import { from } from 'rxjs';
import{View} from '@syncfusion/ej2-angular-schedule'

@Component({
  selector: 'app-root',
  template: '<ejs-schedule [currentView]="setView"></ejs-schedule>',
  //templateUrl: './app.component.html',     // commented templateUrl
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noteit'; 
  public setView: View = 'Month';  // define month view as defult view
  
}
