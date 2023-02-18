import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss']
})
export class PopupConfirmComponent implements OnInit {

  @Input() show = false;
  @Input() question = '';
  @Input() modalType = '';
  @Output() showEvent = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit(): void {
  }

  sendShowValue() {
    this.showEvent.emit(!this.show);
  }

  confirm() {
    if (this.modalType == 'logout') {
      sessionStorage.removeItem('token');
    }
    location.reload();
  }

}
