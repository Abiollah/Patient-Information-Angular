import { Component, OnInit } from '@angular/core';
import { RegistrationData } from 'src/app/models/registration.data';
import { RegistrationDataService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit {

  RegistrationData: RegistrationData = {
    firstName: '',
    lastName: '',
    dataOfBirth: '',
    phoneNumber: '',
    email: '',
    gender: '',
    occupation: '',
    maritalStatus: '',
    registeredDate: '',
    
  };

  registrationdata = {} as RegistrationData;
  submitted = false;
  constructor(private registrationService: RegistrationDataService) { }

  ngOnInit(): void {
  }

  


  addRegistration(){
    this.registrationService.createRegistration(this.registrationdata).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }


  newRegistration(): void {
    this.submitted = false;
    this.registrationdata = this.RegistrationData;
  }


}
