import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRegistrationComponent } from './components/add-registration/add-registration.component';
import { RegistrtionListComponent } from './components/registrtion-list/registrtion-list.component';

@NgModule({
  declarations: [
    AppComponent,
   // AddPatientComponent,
    AddRegistrationComponent,
   RegistrtionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
