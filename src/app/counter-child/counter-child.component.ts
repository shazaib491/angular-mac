import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.css']
})
export class CounterChildComponent  {
@Input() counter:number=0;
@Output() counterChange:EventEmitter<number>=new EventEmitter();
public increment(){
  this.counter++;
  this.counterChange.emit(this.counter);
}

public decrement(){
  this.counter--;
  this.counterChange.emit(this.counter);
}
}
