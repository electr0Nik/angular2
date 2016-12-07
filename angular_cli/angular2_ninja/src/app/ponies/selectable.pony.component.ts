import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Pony } from '../classes/pony';

@Component({
  selector: 'app-selectable-pony',
  templateUrl: 'selectable.pony.component.html'
})
export class SelectablePonyComponent {

  @Input()
  pony: Pony;
  @Output()
  ponySelected: EventEmitter<Pony> = new EventEmitter<Pony>();
  @Output()
  furiSelected: EventEmitter<Pony> = new EventEmitter<Pony>();

  selectPony(): void {
    this.ponySelected.emit(this.pony);
  }

  anotherPony(): void {
    this.furiSelected.emit({ id: 3, name: 'Furi Roaaard' });
  }

}
