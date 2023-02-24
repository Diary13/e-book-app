import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-sell-book',
  templateUrl: './sell-book.component.html',
  styleUrls: ['./sell-book.component.scss']
})
export class SellBookComponent implements OnInit {

  // books = [{
  //   title: "test",
  //   path: 'assets/images/books/book-1.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-2.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-3.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-4.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-5.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-6.png'
  // },
  // {
  //   title: "test",
  //   path: 'assets/images/books/book-1.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-2.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-3.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-4.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-5.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-6.png'
  // },
  // {
  //   title: "test",
  //   path: 'assets/images/books/book-1.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-2.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-3.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-4.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-5.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-6.png'
  // },
  // {
  //   title: "test",
  //   path: 'assets/images/books/book-1.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-3.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-4.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-5.png'
  // },
  // {
  //   title: "",
  //   path: 'assets/images/books/book-6.png'
  // }];
  url = 'http://localhost:3000'
  books = [{
    title: '',
    image: '',
    description: '',
    quantity: 0,
    author: '',
    edit: '',
    price: 0
  }]

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({
      next: (res: any) => {
        console.log("RES: ", res.data.books);
        this.books = res.data.books;
        this.books.forEach((elem) => {
          console.log('elem: ', elem.image);
        })
      },
      error: (err: any) => {
        console.log("ERR: ", err);
      }
    });
  }

}
