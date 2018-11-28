import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // El objeto validators contiene métodos
// con los que validamos nuestros formControlName.

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnChanges, OnInit {

  perfilform: FormGroup;
  inoreactive: string;


  ngOnChanges() {}

  ngOnInit() {
    this.perfilform = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.maxLength(10)),
      'address': new FormGroup({
        'street': new FormControl(''),
        'city': new FormControl(''),
        'zip': new FormControl('', Validators.pattern('[0-9]{5}'))
      })
    });
    console.log(this.perfilform);
  }


  get(path: string): FormControl {
    return <FormControl>this.perfilform.get(path);
  }

  constructor() {
    this.inoreactive = '';
  }
}
