import { CardClassClassService } from './../../shared/service/card-class.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CardService } from 'src/app/shared/service/card.service';

@Component({
  selector: 'app-new-class-modal',
  templateUrl: './new-class-modal.component.html',
  styleUrls: ['./new-class-modal.component.css']
})
export class NewClassModalComponent implements OnInit {

  classForm: FormGroup;

  @Input() name: string;
  @Input() id: string;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private cardClassService: CardClassClassService
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.cardClassService.getById(this.id).subscribe(result => {
        this.initForm(result.name)
      });
    }else{
      this.initForm('');
    }
  }

  initForm(name: string){
    this.classForm = this.formBuilder.group({
      'name': [name , [Validators.required]],
    })
  }

  cancel() {
    this.classForm.reset();
    this.activeModal.dismiss();
  }

  save() {
    if (!this.id) {
      this.cardClassService.createNew(this.classForm.value)
        .subscribe(() => {
          this.toastr.success('Cartão inserido com sucesso')
          this.activeModal.close();
        }
          , () => this.toastr.error("Erro ao criar a categoria"))
    } else {
      this.cardClassService.update(this.id, this.classForm.value)
        .subscribe(() => {
          this.toastr.success('Cartão atualizado com sucesso')
          this.activeModal.close();
        }
          , () => this.toastr.error("Erro ao atualizar a categoria"))

    }
  }

}
