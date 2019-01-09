import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: '<b>{{meg}}</b>`'
})
export class MessageComponent implements OnInit {
    @Input() meg: string;
    ngOnInit() {}
}
