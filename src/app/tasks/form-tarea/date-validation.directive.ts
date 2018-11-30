import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appDatevalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidator,
      multi: true
    }
  ]
})

export class DateValidator implements Validator {
  currentDate: { day: number, month: number, year: number };

  constructor() {
    const nowDate = new Date();
    this.currentDate = { day: null, month: null, year: null};
    this.currentDate.day = nowDate.getDate();
    this.currentDate.month = nowDate.getMonth();
    this.currentDate.year = nowDate.getFullYear();
  }

  validate(control: AbstractControl) {
    const inputvalue = control.value || '';
    const dayC = inputvalue.split('-');
    if ((parseFloat(dayC[2]) < this.currentDate.day &&
      parseFloat(dayC[1]) <= this.currentDate.month + 1 &&
      parseFloat(dayC[0]) <= this.currentDate.year) ||
      (parseFloat(dayC[1]) < this.currentDate.month + 1 &&
      parseFloat(dayC[0]) <= this.currentDate.year) ||
      (parseFloat(dayC[0]) < this.currentDate.year ||
      parseFloat(dayC[0]) >= this.currentDate.year + 2)
    ) {
      return { 'Datevalidator': 'Date invalid' };
    } else {
      return null;
    }
  }
}
