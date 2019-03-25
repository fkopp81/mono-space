import { IMotion } from "../../Motion/IMotion"
import { IObject } from "../Object"

export class Star implements IObject
{
  motion: IMotion
  mass: number
  constructor(motion: IMotion, mass: number)
  {
    this.motion = motion
    this.mass = mass
  }
}
