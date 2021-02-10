import { CardClass } from './../../shared/model/card-class';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CardService } from 'src/app/shared/service/card.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './new-card-modal.component.html',
  styleUrls: ['./new-card-modal.component.css']
})
export class NewCardModalComponent implements OnInit {

  @Input()
  cardClass: CardClass;

  @Input()
  id: string;

  cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private cardService: CardService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    if (!this.id) {
      this.initForm('', '');
    } else {
      this.cardService.getById(this.id).subscribe(result => {
        this.initForm(result.term, result.definition);
      })
    }

  }

  cancel() {
    this.cardForm.reset();
    this.activeModal.dismiss();
  }

  save() {
    let card = this.cardForm.value;
    card["idCardClass"] = this.cardClass.id;
    if (!this.id) {
      this.insert(card);
    } else {
      this.update(card);
    }
  }

  private update(card: any) {
    this.cardService.update(this.id, card)
      .subscribe(result => {
        this.toastr.success('Cartão alterado com sucesso');
        this.activeModal.close();
      }, err => console.log(err));
  }

  private insert(card: any) {
    this.cardService.createNew(card)
      .subscribe(result => {
        this.toastr.success('Cartão inserido com sucesso');
        this.activeModal.close();
      }, err => console.log(err));
  }

  private initForm(term: string, definition: string) {
    this.cardForm = this.formBuilder.group({
      'term': [term, [Validators.required]],
      'definition': [definition, [Validators.required]]
    });
  }

}
