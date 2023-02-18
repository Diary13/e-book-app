import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    this.connected = (token) ? true : false;
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
