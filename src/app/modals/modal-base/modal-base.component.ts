import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.css']
})
export class ModalBaseComponent implements OnInit {

  @Input() title: string;
  @Input() disableSave: boolean;
  @Output() saveEmitter: EventEmitter<any> = new EventEmitter();
  @Output() cancelEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.saveEmitter.emit();
  }

  cancel() {
    this.cancelEmitter.emit();
  }

}
