import { Component, OnInit } from '@angular/core';
import { RegistrationData } from 'src/app/models/registration.data';
import { RegistrationDataService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-registrtion-list',
  templateUrl: './registrtion-list.component.html',
  styleUrls: ['./registrtion-list.component.css']
})
export class RegistrtionListComponent implements OnInit {

  registrations?: RegistrationData[];
  currentRegistration?: RegistrationData;
  currentIndex = -1;
  dataOfBirth = '';


  constructor(private registrationService: RegistrationDataService) { }

  ngOnInit(): void {
  }

  retrieveRegistrations(): void {
    this.registrationService.getAllRegistrations()
      .subscribe(
        data => {
          this.registrations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRegistrations();
    this.currentRegistration = undefined;
    this.currentIndex = -1;
  }

  setActiveRegistration(registration: RegistrationData, index: number): void {
    this.currentRegistration = registration;
    this.currentIndex = index;
  }

  removeAllRegistrations(): void {
    this.registrationService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchDOB(): void {
    this.currentRegistration = undefined;
    this.currentIndex = -1;

    this.registrationService.findByDOB(this.dataOfBirth)
      .subscribe(
        data => {
          this.registrations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
