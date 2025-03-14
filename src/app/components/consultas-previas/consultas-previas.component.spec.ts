import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasPreviasComponent } from './consultas-previas.component';

describe('ConsultasPreviasComponent', () => {
  let component: ConsultasPreviasComponent;
  let fixture: ComponentFixture<ConsultasPreviasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasPreviasComponent]
    });
    fixture = TestBed.createComponent(ConsultasPreviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
