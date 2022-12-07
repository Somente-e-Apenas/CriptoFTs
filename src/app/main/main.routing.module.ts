import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailActiveMessageComponent } from '../home/email-ativate/ative-email.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
