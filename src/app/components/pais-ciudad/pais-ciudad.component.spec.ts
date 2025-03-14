import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCiudadComponent } from './pais-ciudad.component';

describe('PaisCiudadComponent', () => {
  let component: PaisCiudadComponent;
  let fixture: ComponentFixture<PaisCiudadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisCiudadComponent]
    });
    fixture = TestBed.createComponent(PaisCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
