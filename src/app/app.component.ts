import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicsNew';
  skills : Array<string> = ["html", "css", "javascript", " bootstrap", "sass", "angular"]
}
