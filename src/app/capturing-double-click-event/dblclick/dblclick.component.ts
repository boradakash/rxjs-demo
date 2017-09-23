import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/bufferTime';
@Component({
  selector: 'jslovely-dblclick',
  templateUrl: './dblclick.component.html',
  styleUrls: ['./dblclick.component.css']
})
export class DblclickComponent implements AfterViewInit {

  @ViewChild('dblClickBtn') button: ElementRef;
  showDblClicMsg: boolean = false;

  ngAfterViewInit() {
    let singleClickStream$ = Observable.fromEvent(this.button.nativeElement, 'click');
    let doubleClickStream$ = singleClickStream$
      .buffer(singleClickStream$.throttleTime(250))
      .map(arr => arr.length)
      .filter(len => len == 2);

    doubleClickStream$.subscribe(() => {
      this.showDblClicMsg = true;
    });
    doubleClickStream$.
      throttleTime(1000)
      .subscribe(val => {
        this.showDblClicMsg = false;
      })
  }


}
