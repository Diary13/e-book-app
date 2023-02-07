import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-book',
  templateUrl: './sell-book.component.html',
  styleUrls: ['./sell-book.component.scss']
})
export class SellBookComponent implements OnInit {

  books = [{
    title: "test",
    path: 'assets/images/books/book-1.png'
  },
  {
    title: "",
    path: 'assets/images/books/book-2.png'
  },
  {
    title: "",
    path: 'assets/images/books/book-3.png'
  },
  {
    title: "",
    path: 'assets/images/books/book-4.png'
  },
  {
    title: "",
    path: 'assets/images/books/book-5.png'
  },
  {
    title: "",
    path: 'assets/images/books/book-6.png'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
