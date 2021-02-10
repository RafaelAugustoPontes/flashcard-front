import { CardClassClassService } from 'src/app/shared/service/card-class.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardClass } from 'src/app/shared/model/card-class';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCardModalComponent } from 'src/app/modals/new-card-modal/new-card-modal.component';
import { Card } from 'src/app/shared/model/card';
import { CardService } from 'src/app/shared/service/card.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';

@Component({
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit, OnDestroy {

  private id: string;
  classCard: CardClass;
  cards: Card[];
  currentRate = 8;

  constructor(private route: ActivatedRoute,
    private cardClassService: CardClassClassService,
    private cardService: CardService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCardClass();
    this.getCards();
  }

  ngOnDestroy(): void {
  }

  getCards() {
    this.cardService.getByCardClass(this.id)
      .subscribe(result => this.cards = result);
  }


  private getCardClass() {
    this.cardClassService.getById(this.id).subscribe(result => {
      this.classCard = result;
    });
  }

  openModalNewCard(): void {
    const modalRef = this.modalService.open(NewCardModalComponent, {});
    modalRef.componentInstance.cardClass = this.classCard;
    modalRef.result.then(() => {
      this.getCards();
    });
  }

  edit(id: string) {
    const modalRef = this.modalService.open(NewCardModalComponent, {});
    modalRef.componentInstance.cardClass = this.classCard;
    modalRef.componentInstance.id = id;
    modalRef.result.then(() => {
      this.getCards();
    });
  }

  remove(id: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {});
    modalRef.componentInstance.confirmText = 'O cartão seja excluído definitivamente. Deseja prosseguir com a operação?';
    modalRef.result.then(() => {
      this.cardService.delete(id).subscribe(
        () => {
          this.toastr.success("Cartão excluido com sucesso");
          this.getCards();
        },
        () => this.toastr.error("Erro ao excluir o cartão"))
    })
  }


}
