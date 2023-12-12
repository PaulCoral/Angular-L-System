import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSystemFormComponent } from './l-system-form.component';

describe('LSystemFormComponent', () => {
  let component: LSystemFormComponent;
  let fixture: ComponentFixture<LSystemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSystemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSystemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
