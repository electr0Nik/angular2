import { Component, Input, Output, EventEmitter } from "@angular/core"


import { Pony } from "../classes/pony"

@Component({
  selector: "app-pony-coponent",
  templateUrl: "pony.component.html",
  styleUrls: ['pony.component.scss']
})
export class PonyComponent {
  @Input()
  pony: Pony;
  @Output()
  ponyClicked: EventEmitter<Pony> = new EventEmitter<Pony>();

  clickOnPony() {
    console.log('pony clicked')
    this.ponyClicked.emit(this.pony);
  }

}
