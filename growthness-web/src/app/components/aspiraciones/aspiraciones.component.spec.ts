import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspiracionesComponent } from './aspiraciones.component';

describe('AspiracionesComponent', () => {
  let component: AspiracionesComponent;
  let fixture: ComponentFixture<AspiracionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspiracionesComponent]
    });
    fixture = TestBed.createComponent(AspiracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
