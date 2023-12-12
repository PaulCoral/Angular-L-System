import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSystemCanvasComponent } from './l-system-canvas.component';

describe('LSystemCanvasComponent', () => {
  let component: LSystemCanvasComponent;
  let fixture: ComponentFixture<LSystemCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSystemCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSystemCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
