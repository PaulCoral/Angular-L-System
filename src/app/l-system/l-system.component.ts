import { Component, Input, OnInit } from '@angular/core';
import { LSystemForm } from '../models/form';
import { LSystemEvaluator } from '../models/l-system';
import { LSystemRule } from '../models/rule';

@Component({
  selector: 'app-l-system',
  templateUrl: './l-system.component.html',
  styleUrls: ['./l-system.component.css']
})
export class LSystemComponent implements OnInit {
  rules: LSystemRule[] = []
  step = 0

  constructor() { }

  ngOnInit(): void {
  }

  onFormUpdate(udpatedForm: LSystemForm) {
    this.rules = [...udpatedForm.rules]
  }

  onStepChange(newStep: number) {
    this.step = newStep
  }
}
