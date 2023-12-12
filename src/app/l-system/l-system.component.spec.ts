import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSystemComponent } from './l-system.component';

describe('LSystemComponent', () => {
  let component: LSystemComponent;
  let fixture: ComponentFixture<LSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
