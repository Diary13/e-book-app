import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public active: boolean = false;
  public connected: boolean = false;
  showModal = false;
  question = "Voulez-vous vraiment quitter?";
  decodeToken: any;
  constructor() { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.connected = true;
      this.decodeToken = jwtDecode(token);
    } else
      this.connected = false;
  }

  quit() {
    this.showModal = !this.showModal;
  }
  receiveShowValue(show: boolean) {
    this.showModal = show;
  }
  logout() {
    sessionStorage.removeItem('token');
  }
}
