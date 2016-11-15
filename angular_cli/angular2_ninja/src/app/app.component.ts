import { Component } from '@angular/core';

import { RaceService } from './service/race.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private raceService: RaceService) { }

  title = 'app works!';
  races: Array<any> = [];

  refreshRaces(): void {
    this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }

  list(): Array<any> {
    return this.raceService.list();
  }

}
