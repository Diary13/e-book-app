import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() path: string = '';
  show = false;
  connected = '';

  constructor() { }

  ngOnInit(): void {
    this.connected = sessionStorage.getItem('token') || '';
  }

  toggleModal() {
    this.show = !this.show;
  }
}
