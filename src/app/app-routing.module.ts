import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCardModalComponent } from './modals/new-card-modal/new-card-modal.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cardClass/:id',
    component: CardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
