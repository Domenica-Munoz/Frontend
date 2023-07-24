import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudcreditoComponent } from './solicitudcredito.component';

describe('SolicitudcreditoComponent', () => {
  let component: SolicitudcreditoComponent;
  let fixture: ComponentFixture<SolicitudcreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudcreditoComponent]
    });
    fixture = TestBed.createComponent(SolicitudcreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
