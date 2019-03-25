import { Fix } from "../src/Motion/IMotion"
import { Constants } from "./../src/Constants/Constants"
import { Orbit } from "./../src/Motion/Orbit/Orbit"
import { Star } from "./../src/Object/Star/Star"

test("Fixed position is fixed", () =>
{
  const sunPos = { x: Math.random() * 1000, y: Math.random() * 1000 }
  const sunMotion = new Fix(sunPos.x, sunPos.y)
  const sun = new Star(sunMotion, Math.pow(1.989, 30))
  const time0 = 0
  const time1 = 0
  expect(sun.motion.position(time0))
    .toEqual(sun.motion.position(time1))
})

test("Earth orbits", () =>
{
  const AU = Constants.getInstance().AU
  const sunPos0 = { x: 0, y: 0 }
  const sunPos1 = { x: 23, y: 7512.332 }
  const sunMotion = new Fix(sunPos0.x, sunPos0.y)
  const sun = new Star(sunMotion, 1.989 * Math.pow(10, 30))
  const orbit = new Orbit(sun, AU)
  expect(orbit.position(0)).toEqual({ x: 0, y: AU })

  const daysPerPeriod = orbit.period / 60 / 60 / 24
  expect(daysPerPeriod).toBeGreaterThan(365)
  expect(daysPerPeriod).toBeLessThan(366)

  const pos90 = orbit.position(orbit.period * 0.25)
  expect(pos90.y).toBeGreaterThan(-0.1)
  expect(pos90.y).toBeLessThan(0.1)
  expect(pos90.x).toBeGreaterThan(AU - 0.1)
  expect(pos90.x).toBeLessThan(AU + 0.1)
})
