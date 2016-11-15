import { Component, Input } from "@angular/core"

import { Pony } from "../classes/pony"

@Component({
  selector: "app-pony-coponent",
  templateUrl: "pony.component.html",
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class PonyComponent {
  @Input()
  pony: Pony;
}