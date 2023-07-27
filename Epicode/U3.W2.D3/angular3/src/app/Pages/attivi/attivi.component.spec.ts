import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttiviComponent } from './attivi.component';

describe('AttiviComponent', () => {
  let component: AttiviComponent;
  let fixture: ComponentFixture<AttiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttiviComponent]
    });
    fixture = TestBed.createComponent(AttiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
