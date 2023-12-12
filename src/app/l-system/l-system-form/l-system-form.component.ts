import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounce, delay, interval, tap, throttle } from 'rxjs';
import { LSystemForm } from 'src/app/models/form';

@Component({
  selector: 'app-l-system-form',
  templateUrl: './l-system-form.component.html',
  styleUrls: ['./l-system-form.component.css']
})
export class LSystemFormComponent implements OnInit, AfterViewInit {
  @Output() lSystemForm = new EventEmitter<LSystemForm>()
  @Output() step = new EventEmitter<number>()

  formModel: LSystemForm = {
    rules: []
  }

  subscriptions: Subscription[] = []
  changeSubject: Subject<void> = new Subject()

  _step: number = 0

  constructor() { }

  ngOnInit(): void {
    this.addRuleToForm()
    console.log('start')
    this.subscriptions.push(
      this.changeSubject.pipe(
        debounce(_ => interval(50)),
      ).subscribe(
        () => this.lSystemForm.emit(this.formModel)
      )
    )
  }

  ngAfterViewInit(): void {
    this.step.emit(this._step)
  }

  private addRuleToForm() {
    this.formModel.rules.push(
      {
        name: this.getNewRuleName(),
        pattern: ''
      }
    )
  }

  onRuleChange(_: any) {
    console.log('onRuleChange', _)
    this.changeSubject.next()
  }

  onPlusStep() {
    this._step += 1
    this.step.emit(this._step)
  }

  onMinusStep() {
    this._step = Math.max(this._step - 1, 0)
    this.step.emit(this._step)
  }

  private getNewRuleName() {
    return `F`
  }
}
