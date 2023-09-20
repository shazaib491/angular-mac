import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public content:any;

  public onInput(event:any):void{
    this.content=event.target.value;
  }

  public submitEvent(event:any){
    console.log("Event Trigger",event.target);
  }
}
