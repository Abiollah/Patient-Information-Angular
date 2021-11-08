import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRegistrationComponent } from './components/add-registration/add-registration.component';
import { RegistrtionListComponent } from './components/registrtion-list/registrtion-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'addReg', pathMatch: 'full' },

  { path: 'addReg', component: AddRegistrationComponent },
  { path: 'registration', component: RegistrtionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
