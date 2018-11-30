import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive(
    {
        selector: '[appTimeValidation]',
        providers: [
            { provide: NG_VALIDATORS,
              useExisting: TimeValidator,
              multi: true
            }
        ]
    })
export class TimeValidator implements Validator {
    nowDate: Date;

    constructor() {
        const now = Date.now();
        this.nowDate = new Date(now);
    }

    validate(control: AbstractControl) {
        const valueC = control.value || '';
        const inputTime = valueC.split(':');
        const inpuTimeD = new Date(this.nowDate.getFullYear(),
            this.nowDate.getMonth(), this.nowDate.getDate(), parseFloat(inputTime[0]),
            parseFloat(inputTime[1]));
        return inpuTimeD.getTime() <= this.nowDate.getTime() ?
        {'TimeValidator': 'Debe ser mayor al momento actual'} : null;
    }
}

