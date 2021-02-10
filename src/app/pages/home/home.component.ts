import { CardService } from '../../shared/service/card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/model/card';
import { CardClassClassService } from 'src/app/shared/service/card-class.service';
import { CardClass } from 'src/app/shared/model/card-class';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewClassModalComponent } from 'src/app/modals/new-class-modal/new-class-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public classes: CardClass[];

  constructor(
    private classCardService: CardClassClassService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllClasses();
  }

  getAllClasses() {
    this.classCardService.getAll().subscribe(cards => {
      this.classes = cards;
    })
  }

  openModalNewClass(): void {
    const modalRef = this.modalService.open(NewClassModalComponent, {});
    modalRef.result.then(() => this.getAllClasses());
  }

  deleteClass(id: string) {
    this.classCardService.delete(id)
      .subscribe(() => {
        this.toastr.success('Categoria excluída com sucesso');
        this.getAllClasses();
      });
  }

  update(id: string) {
    const modalRef = this.modalService.open(NewClassModalComponent, {});
    modalRef.componentInstance.id = id;
    modalRef.result.then(() => this.getAllClasses());
  }

}
