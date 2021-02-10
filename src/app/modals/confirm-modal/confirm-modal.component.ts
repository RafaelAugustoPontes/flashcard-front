import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input()
  confirmText: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cancel() {
    this.activeModal.dismiss();
  }

  confirm() {
    this.activeModal.close();
  }

}
