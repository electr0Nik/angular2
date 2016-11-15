
import { Injectable } from '@angular/core'


@Injectable()
export class RaceServiceMock {

  list(): Array<any> {
    return [{ name: "Paris" }]
  }

}