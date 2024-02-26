import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) { }

  //! Creamos un getter, para pasarle la propiedad privada y asignarlo a una propiedad publica.

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onIdDeleteCharacter(id: string): void {
    this.dbzService.onIdDeleteCharacter(id);
  }

  onNewCharacter( character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
