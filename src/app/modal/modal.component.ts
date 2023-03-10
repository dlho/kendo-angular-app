import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalTitle!: string;
  @Input() modalText!: string;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  close(event: any) {
      this.closeModal.emit(event);
  }
}
