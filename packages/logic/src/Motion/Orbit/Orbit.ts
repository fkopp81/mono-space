import { Constants } from "../../Constants/Constants"
import { IObject } from "../../Object/Object"
import { IMotion } from "../IMotion"

export class Orbit implements IMotion
{
  parent: IObject
  distance: number
  angle: number
  period: number
  constructor(parent: IObject, distance: number)
  {
    [this.parent, this.distance] = [parent, distance]
    this.period = this.computePeriod()
  }
  position(time: number): IPosition
  {
    const parentPosition = this.parent.motion.position(time)
    const angle = (time / this.period) * 2 * Math.PI
    return {
      x: this.distance * Math.sin(angle),
      y: this.distance * Math.cos(angle),
    }
  }

  computePeriod(): number
  {
    return Math.pow(
      (4 * Math.pow(Math.PI, 2)) * Math.pow(this.distance, 3) /
      (Constants.getInstance().G * this.parent.mass), 0.5)
  }
}
