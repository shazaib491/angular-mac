import { Component, Input, Output, SimpleChange,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.css']
})
export class AboutChildComponent {
@Input() title:any;
@Output() customEvent:any=new EventEmitter<string>();

constructor(){
  console.log(this.title);
}

ngOnChange(change:SimpleChange){
  console.log(change)
  console.log(this.title);
}


public sendData(){
  this.customEvent.emit("data from child");
}

ngOnInit(){
  console.log(this.title);
}


ngAfterViewInit(){
  console.log(this.title);
}


}
