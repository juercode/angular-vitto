import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelleHeaderComponent } from './cartelle-header.component';

describe('CartelleHeaderComponent', () => {
  let component: CartelleHeaderComponent;
  let fixture: ComponentFixture<CartelleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartelleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartelleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
