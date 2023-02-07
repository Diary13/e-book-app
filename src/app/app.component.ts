import { Component } from '@angular/core';
import 'aos';

declare const AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-book-app';
  constructor() {
    AOS.init();
  }

}
