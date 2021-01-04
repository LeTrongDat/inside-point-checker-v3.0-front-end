import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesComponent } from './form-des.component';

describe('FormDesComponent', () => {
  let component: FormDesComponent;
  let fixture: ComponentFixture<FormDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
