//! BUG V1.1 Solucione un error aquí
/**
 * ! ENH 1
 * * El problema era que en id estaba anteriormente así: id?: string
 * * esto ocasionaba que en list component saliera un error
 * ! <button class="btn btn-danger" (click)="deleteCharacter(character.id)">X</button>
 * * donde character.id no permitía *undefined*
 *
 * ? La solución fue quitarle el signo opcional ? y en dbz.services.ts
 * ? le agregamos a character la propiedad id: '', en publich character
 */

/**
 * ! ENH 2 -> Explicada por el profe
 * ! Otra manera de solucionarlo es dejarle el ? y ya se soluciona directamente
 * ! desde la función de delete
 **/

export interface Character {
  //! ENH 2
  //id?: string;
  id: string;
  name: string;
  power: number;
}
