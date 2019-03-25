export interface IMotion
{
  position(time: number): IPosition
}

export class Fix implements IMotion
{
  x: number
  y: number
  constructor(x: number, y: number)
  {
    [this.x, this.y] = [x, y]
  }
  position(_: number)
  {
    return { x: this.x, y: this.y }
  }

}
