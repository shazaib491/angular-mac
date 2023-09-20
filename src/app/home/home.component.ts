import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <div>
      <div [class.active]="isEnabled"  >Hello Wolrd</div>
      <p [style.color]="color" >sdnfjkbfkjdbfkjasb</p>
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
  public isEnabled=true;
  public color="green"
  public imgages="https://picsum.photos/200/300"
}
