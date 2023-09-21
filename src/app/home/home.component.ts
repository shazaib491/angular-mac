import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <div>
      <div [class.active]="isEnabled"  >Hello Wolrd</div>
      <p *ngIf="isEnabled" >sdnfjkbfkjdbfkjasb</p>
    </div>
  `,
  styles: [`
  .active{
    color:red;
  }
  `
  ]
})
export class HomeComponent {
  public isEnabled=false;
  public color="none"
  public imgages="https://picsum.photos/200/300"
}
