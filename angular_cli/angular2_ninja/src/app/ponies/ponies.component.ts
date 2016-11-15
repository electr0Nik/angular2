import { Component } from '@angular/core';

import { Pony } from '../classes/pony';

@Component({
  selector: 'app-ponies-component',
  templateUrl: 'ponies.component.html'
})
export class PoniesComponent {

  title: string = 'Ponies';

  ponies: Array<Pony> = [
    { id: 1, name: 'Rainbow Dash' },
    { id: 2, name: 'Pinkie Pie' }
  ];

  randomText: string = 'some text';
  today = [2016, 10, 14];

  refreshPonies(): void {
    this.randomText = 'changed text';
    this.ponies = [
      { id: 3, name: 'Fluttershy' },
      { id: 4, name: 'Furi' }
    ];
  }

  onNewRace(): void {
    console.log('nothing!');
  }

  betOnPony(pony) {
    console.log(pony.name);
  }

  printFuriRoaard(pony) {
    console.log(pony.name);
  }

}
