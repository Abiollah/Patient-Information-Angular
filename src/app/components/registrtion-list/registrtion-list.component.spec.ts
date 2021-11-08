import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrtionListComponent } from './registrtion-list.component';

describe('RegistrtionListComponent', () => {
  let component: RegistrtionListComponent;
  let fixture: ComponentFixture<RegistrtionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrtionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrtionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
