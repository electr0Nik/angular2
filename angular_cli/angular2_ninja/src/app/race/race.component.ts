import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input()
  race: any;

  constructor() { }

  ngOnInit() {
  }

}
