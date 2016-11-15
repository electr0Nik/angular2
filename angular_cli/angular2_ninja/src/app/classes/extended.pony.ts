
export class Pony {

  constructor(public id: number, public name: string, public speed: number) { }

  isFasterThan(speed: number): boolean {
    return this.speed > speed;
  }

}
