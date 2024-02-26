import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: './list.component.html',
})

export class ListComponent {

  //! la siguiente linea de código nos permite emitir un evento

  @Output()
  public onIdDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: "",
      name: 'Trunks',
      power: 10
    }
  ]
  //! ENH 2
  //deleteCharacter(i?: string): void {
  //! ENH 1
  deleteCharacter(i: string): void {
    //console.log("id",i);
    //! Una manera de solucionar el bug -> la referencia o comentado esta
    //! en character.interfaces.ts
    //! if(!i) return;
    if(i.length > 0) this.onIdDeleteCharacter.emit(i);
  }


}
