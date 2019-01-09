import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private elem: ElementRef) {
  }

  ngOnInit() {
    const bubs = Array.from(this.elem.nativeElement.querySelectorAll('.bubble'));
    let height = 30;
    let width = 30;
    let acc = 0;
    let bTarget: any = bubs[acc];
    setInterval(function () {
        if (height === 15 && width === 15) {
          height = 30;
          width = 30;
          bTarget.style.width = width + 'px';
          bTarget.style.height = height + 'px';
            if (acc !== bubs.length - 1) {
              acc = acc + 1;
            } else {
              acc = 0;
            }
            bTarget = bubs[acc];
        }
          bTarget.style.width = width + 'px';
          bTarget.style.height = height + 'px';
          width--;
          height--;
        }, 30);
  }
}
