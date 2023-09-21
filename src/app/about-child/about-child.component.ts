import { Component, Input, Output, SimpleChange,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.css']
})
export class AboutChildComponent implements OnChanges{
@Input() data:any;
@Output() customEvent=new EventEmitter();


ngOnChanges(changes: SimpleChanges): void {

}


public addToCart(index:any){
  this.customEvent.emit(index);
}

}
