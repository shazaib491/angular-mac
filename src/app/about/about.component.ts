import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public content:any={};


 public cards = [
    { id:1,title: 'Card 1', content: 'This is card 1.' },
    { id:2,title: 'Card 2', content: 'This is card 2.' },
    { id:3,title: 'Card 3', content: 'This is card 3.' }
  ];

  public bucket:any[]=[];

  public onInput(event:any):void{
    const {name,value}=event.target;
    this.content={...this.content,[name]:value,};
  }

  public submitEvent(event:any){
    this.cards.push(this.content);
    this.content={};
  }

  public addCart(index:any){
    this.bucket.push(this.cards[index-1])
    console.log(this.bucket)

  }
}
