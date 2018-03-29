export class Keg {
  public pints: number = 10;
  public reorder: boolean = true;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) { }
}
