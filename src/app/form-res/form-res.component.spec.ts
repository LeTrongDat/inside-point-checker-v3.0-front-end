import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResComponent } from './form-res.component';

describe('FormResComponent', () => {
  let component: FormResComponent;
  let fixture: ComponentFixture<FormResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
