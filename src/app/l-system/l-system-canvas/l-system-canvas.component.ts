import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LSystemEvaluator } from 'src/app/models/l-system';
import { LSystemRule } from 'src/app/models/rule';

@Component({
  selector: 'app-l-system-canvas',
  templateUrl: './l-system-canvas.component.html',
  styleUrls: ['./l-system-canvas.component.css']
})
export class LSystemCanvasComponent implements OnInit, AfterViewInit {
  /**
   * Height of the canvas
   */
  _height: number = 300
  get height() : number {
    return this._height
  }
  @Input() set height(v : number) {
    this._height = v;
    if(this.htmlCanvasRef?.nativeElement?.height) {
      this.htmlCanvasRef.nativeElement.height = this.height
    }
  }
  
  /**
   * Width of the canvas
   */
  _width: number = 600
  get width() : number {
    return this._width
  }
  @Input() set width(v: number) {
    this._width = v
    if(this.htmlCanvasRef?.nativeElement?.width) {
      this.htmlCanvasRef.nativeElement.width = this.width
    }
  }

  /**
   * The rules pattern
   */
  private _patternRules?: LSystemRule[]
  get patternRules(): LSystemRule[] | undefined {
    return this._patternRules;
  }
  @Input() set patternRules(v: LSystemRule[] | undefined) {
    this._patternRules = v
    this.updateCanvas()
  }

  /**
   * The number of step to draw the pattern
   */
  private _step: number = 1
  get step() {
    return this._step;
  }
  @Input() set step(v: number) {
    this._step = v
    this.updateCanvas()
  }

  /**
   * The HTML canvas
   */
  @ViewChild("lSystemCanvas")
  htmlCanvasRef?: ElementRef<HTMLCanvasElement>

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('a')
    if(this.htmlCanvasRef?.nativeElement?.height) {
      console.log('b')
      this.htmlCanvasRef.nativeElement.height = this.height
    }

    if(this.htmlCanvasRef?.nativeElement?.width) {
      this.htmlCanvasRef.nativeElement.width = this.width
    }
  }

  updateCanvas() {
    const ctx = this.htmlCanvasRef?.nativeElement.getContext('2d')
    if(!ctx){
      return;
    }
    ctx.clearRect(
      0, 
      0, 
      this.htmlCanvasRef?.nativeElement.width ?? 0, 
      this.htmlCanvasRef?.nativeElement.height ?? 0
    )
    ctx.beginPath()
    if(!this.patternRules) {
      return;
    }
    this.drawPatternOnContext(ctx, this.patternRules)
  }

  drawPatternOnContext(ctx: CanvasRenderingContext2D, patternRules: LSystemRule[]) {
    const patternEval = new LSystemEvaluator(patternRules)
    const pattern = patternEval.getIteration(this.step)
    const position = {
      x: (this.width) / 2.0,
      y: (this.height) / 2.0
    }
    const direction = {
      x: 0.0,
      y: 1.0
    }

    ctx.moveTo(position.x, position.y)
    for (let i = 0; i < pattern.length; i++) {
      switch(pattern.charAt(i)) {
        case 'f':
          position.x += direction.x * 20
          position.y += direction.y * 20
          ctx.lineTo(
            position.x,
            position.y
          )
          break;
        case 'l': 
          this.rotate2DVector(direction, 2*Math.PI*60/360)
          break
        case 'r':
          this.rotate2DVector(direction, -2*Math.PI*60/360)
          break
      }
    }
    ctx.stroke()
  }

  private rotate2DVector(vec: {x: number, y: number}, rad: number) {
    const x = vec.x
    const y = vec.y
    vec.x = Math.cos(rad) * x - Math.sin(rad) * y
    vec.y = Math.sin(rad) * x + Math.cos(rad) * y
  }

  onWidthChange(newWidth: Event) {
    //this.width = Number(newWidth.target.)
    console.log('paul-debug', newWidth)
  }

  onHeightChange(newHeight: Event) {
    //this.height = Number(newHeight)
  }
}
