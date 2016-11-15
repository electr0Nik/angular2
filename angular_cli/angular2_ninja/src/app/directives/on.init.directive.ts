import { Directive, OnInit, Input } from "@angular/core"

@Directive({
  selector: '[initDirective]'
})
export class OnInitDirective implements OnInit {

  @Input()
  pony: string

  ngOnInit() {
    console.log(`inputs are ${this.pony}`)
  }
}