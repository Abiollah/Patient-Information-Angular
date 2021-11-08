import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationData } from '../models/registration.data';

const baseUrl = 'http://localhost:7650/api/RegistrationDatas';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor(private http: HttpClient) { }

  getAllRegistrations(): Observable<RegistrationData[]> {
    return this.http.get<RegistrationData[]>(baseUrl);
  }

  getRegistration(id: any): Observable<RegistrationData> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createRegistration(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateRegistration(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteRegistration(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByDOB(dataOfBirth: any): Observable<RegistrationData[]> {
    return this.http.get<RegistrationData[]>(`${baseUrl}?dataOfBirth=${dataOfBirth}`);
  }

  
}
