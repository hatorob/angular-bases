import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

//? Este decorador representa para angular que es un servicio
@Injectable({
  providedIn: 'root' //! Nuestro servicio hará un singleton en toda nuestra app
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krilin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9000
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500
    }
  ];

  //! Escuchamos el evento emitido a través de la siguiente función
  onNewCharacter({ name, power }: Character ): void {
    if(name != undefined && power != undefined) {
      const newCharacter: Character = {
        id: uuid(),
        name,
        power
      }
      this.characters.push(newCharacter);
    }
  }
  //! Escuchamos el evento emitido a través de la siguiente función
  onIdDeleteCharacter(idDelete: string ): void {
    console.log("dan click");
    if(idDelete.length > 0) {
      console.log("idDelete",idDelete);
      //! una manera de eliminar el elemento utilizando filter, pero podemos hacerlo más sencillo.
      let newCharacters: Character[] = this.characters.filter( character => character.id != idDelete);
      this.characters = newCharacters;
      //!Cuando eliminabamos por posición del objeto, ahora debemos eliminar por id del objeto
      //this.characters.splice(idDelete,1);
    }
  }

}
