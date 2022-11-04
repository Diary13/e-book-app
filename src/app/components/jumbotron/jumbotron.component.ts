import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  counter: number = 0;
  show: boolean = false
  constructor() { }

  public delay(delay: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), delay))
  }

  ngOnInit(): void {
    setInterval(async () => {
      this.show = true
      await this.delay(2000)
      this.counter = (this.counter + 1 < 2) ? this.counter + 1 : 0;
      // await this.delay(1000)
      this.show = false
    }, 6000)
  }
}
