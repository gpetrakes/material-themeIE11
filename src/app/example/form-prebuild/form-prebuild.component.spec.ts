import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrebuildComponent } from './form-prebuild.component';

describe('FormPrebuildComponent', () => {
  let component: FormPrebuildComponent;
  let fixture: ComponentFixture<FormPrebuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrebuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
