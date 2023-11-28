import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolorComponent } from './dolor.component';

describe('DolorComponent', () => {
  let component: DolorComponent;
  let fixture: ComponentFixture<DolorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolorComponent]
    });
    fixture = TestBed.createComponent(DolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
