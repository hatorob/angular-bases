import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent {

  //! La siguiente línea de códígo nos permite emiter un evento
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void {
    //console.log(this.character);

    //!Si no se envió algún valor retornamos para salirnos de la función.
    if(this.character.name.length === 0) return;

    //! Emitimos el newEvento de nuestro personaje....
    this.onNewCharacter.emit(this.character);
    //! Reseteamos los valores
    let newObjet: Character = {
      id: "",
      name: "",
      power: 0
    }
    this.character = newObjet;
  }

}
