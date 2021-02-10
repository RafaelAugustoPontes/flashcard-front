import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCardModalComponent } from './modals/new-card-modal/new-card-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalBaseComponent } from './modals/modal-base/modal-base.component';
import { NewClassModalComponent } from './modals/new-class-modal/new-class-modal.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCardModalComponent,
    ModalBaseComponent,
    NewClassModalComponent,
    CardPageComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
