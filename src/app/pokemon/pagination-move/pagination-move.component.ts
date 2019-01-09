import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-move',
  templateUrl: './pagination-move.component.html',
  styleUrls: ['./pagination-move.component.css']
})
export class PaginationMoveComponent implements OnInit {
  limitValue: number;
  numbersLimit: Array<number>;
  acumulator: number;

  @Input() moveArrayLength;
  @Output() nextStateMove: EventEmitter<any> = new EventEmitter;

  constructor() {
    this.acumulator = 1;
  //  this.numbersLimit = [ 10, 15 , 20 ];
    this.limitValue = 10;
  }

  ngOnInit() {  }

  previousState() {
    this.addStateMove(this.acumulator - 1);
  }
  nextState() {
    this.addStateMove(this.acumulator + 1);
  }

  addStateMove(num: number) {
    if (num * this.limitValue  > this.moveArrayLength || num <= 0 ) {
      this.acumulator = 1;
    } else {
      this.acumulator = num;
      if (num === 1) {
        this.nextStateMove.emit({
          currentArray: {
              start: 0,
              end: Math.round(this.moveArrayLength / 10),
            }
          });
      } else {
        this.nextStateMove.emit({
          currentArray: {
              start: Math.round(this.moveArrayLength / this.limitValue) * (num - 1) + 1,
              end: Math.round(this.moveArrayLength / this.limitValue) * num,
            }
          });
      }
    }
  }
}

