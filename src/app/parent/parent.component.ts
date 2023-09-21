import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public parentContent:string="Hello world"
  public parentMessage?:string;

  public childMessage(message:any){
    console.log(message);
  }


  onInput(event:any){
    const {value}=event.target;
    this.parentMessage=value;
  }

}
