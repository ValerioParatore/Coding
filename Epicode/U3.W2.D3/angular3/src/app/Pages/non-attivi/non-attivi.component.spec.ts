import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAttiviComponent } from './non-attivi.component';

describe('NonAttiviComponent', () => {
  let component: NonAttiviComponent;
  let fixture: ComponentFixture<NonAttiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonAttiviComponent]
    });
    fixture = TestBed.createComponent(NonAttiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
