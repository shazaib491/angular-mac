import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.css']
})
export class CounterChildComponent implements OnChanges {
@Input()  contentFromParent?:string;
@Input()  parentMessage?:string;
@Output() contentFromParentEvent:EventEmitter<string> = new EventEmitter();
ngOnChanges(changes: SimpleChanges): void {
  console.log(this.parentMessage)
  console.log(this.contentFromParent)
}


onSubmit(){
  this.contentFromParentEvent.emit("Data from chold");
}
}
