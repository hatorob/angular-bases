import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Hulk','Ironman','Superman','Goku','Thor','Vegeta'];
  public heroDelate?: string;
  removeLastHero():void {
    this.heroDelate = this.heroNames.pop();
  }

}
