import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacioncreditoComponent } from './aprobacioncredito.component';

describe('AprobacioncreditoComponent', () => {
  let component: AprobacioncreditoComponent;
  let fixture: ComponentFixture<AprobacioncreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprobacioncreditoComponent]
    });
    fixture = TestBed.createComponent(AprobacioncreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
