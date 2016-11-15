import { Directive } from "@angular/core"

@Directive({
  selector: "[loggable]",
  inputs: ["text: logText"]
})
export class SimpleTextDirective {

  set text(value) {
    console.log(value)
  }
}
