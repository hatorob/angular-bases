import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Ironman";
  public age: number = 45;

  /* Metodos */
  // los getters se ven como si fueran propiedades (así sea un método)
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  //! Método cambio name
  changeName():void {
    this.name = "Hulk";
  }
  //! Método cambio age
  changeAge():void {
    this.age = 22;
  }
  //! Método reset name and age
  resetNameAge():void {
    this.name = "Ironman";
    this.age = 45;
  }

}
