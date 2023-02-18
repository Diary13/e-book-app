import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  show = false;
  commandShow = true;
  commandQuestion = 'Voulez-vous valider la commande?'
  deleteQuestion = 'Voulez-vous vraiment vider votre panier?'

  books = [{
    'title': ''
  },
  {
    'title': ''
  }, {
    'title': ''
  },
  {
    'title': ''
  }]
  constructor() { }

  ngOnInit(): void {
  }
  toggleModal(event: MouseEvent) {
    const clickedButton = event.target as HTMLButtonElement;
    const buttonClass = clickedButton.classList;
    this.commandShow = (buttonClass.contains('command')) ? true : false;
    this.show = !this.show;
  }

  receiveShowValue(show: boolean) {
    this.show = show;
  }
}
