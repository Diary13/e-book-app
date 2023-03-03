import { Component } from '@angular/core';
import 'aos';
import jwtDecode from 'jwt-decode';

declare const AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-book-app';
  token = sessionStorage.getItem('token') || '';
  decodeToken: any;

  constructor() {
    AOS.init();
    if (this.token != '') {
      this.decodeToken = jwtDecode(this.token);
    }
  }

}
