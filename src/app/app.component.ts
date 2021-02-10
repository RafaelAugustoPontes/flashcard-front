import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewClassModalComponent } from './modals/new-class-modal/new-class-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'flashcard-app';

  constructor(private modalService: NgbModal) { }

  openModalNewClass(): void {
    const modalRef = this.modalService.open(NewClassModalComponent, {});
    modalRef.result.then((result) => {
     console.log("Sucesso");
    }, (reason) => {
      console.log("Modal fechada");
    });
  }

}
