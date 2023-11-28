import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjesionesComponent } from './objesiones.component';

describe('ObjesionesComponent', () => {
  let component: ObjesionesComponent;
  let fixture: ComponentFixture<ObjesionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjesionesComponent]
    });
    fixture = TestBed.createComponent(ObjesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
