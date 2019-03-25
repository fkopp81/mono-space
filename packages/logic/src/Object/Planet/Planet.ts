import { Orbit } from "../../Motion/Orbit/Orbit"
import { IObject } from "../Object"

export class Planet implements IObject
{
  motion: Orbit
  mass: number
}
