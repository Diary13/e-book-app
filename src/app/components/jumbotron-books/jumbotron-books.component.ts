import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron-books',
  templateUrl: './jumbotron-books.component.html',
  styleUrls: ['./jumbotron-books.component.scss']
})
export class JumbotronBooksComponent implements OnInit {

  cpt: number = 0;
  back1: boolean = true;
  back2: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setInterval(async () => {
      switch (this.cpt) {
        case 0:
          this.back1 = true;
          this.back2 = false;
          break;
        case 1:
          this.back1 = false;
          this.back2 = true;
          break;
        case 2:
          this.back1 = true;
          this.back2 = false;
          this.cpt = 0;
          break;
      }
      this.cpt++;
    }, 6000);

  }
}