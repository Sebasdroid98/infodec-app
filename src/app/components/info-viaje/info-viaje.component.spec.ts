import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViajeComponent } from './info-viaje.component';

describe('InfoViajeComponent', () => {
  let component: InfoViajeComponent;
  let fixture: ComponentFixture<InfoViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoViajeComponent]
    });
    fixture = TestBed.createComponent(InfoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
