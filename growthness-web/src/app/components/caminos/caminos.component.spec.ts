import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminosComponent } from './caminos.component';

describe('CaminosComponent', () => {
  let component: CaminosComponent;
  let fixture: ComponentFixture<CaminosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaminosComponent]
    });
    fixture = TestBed.createComponent(CaminosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
