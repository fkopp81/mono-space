export class Constants
{
  static getInstance()
  {
    if (!Constants.instance)
    {
      Constants.instance = new Constants()
      // ... any one time initialization goes here ...
    }
    return Constants.instance
  }
  private static instance: Constants
  public readonly G: number
  public readonly AU: number
  private constructor()
  {
    this.G = 6.67408 * Math.pow(10, -11)
    this.AU = 149597870700
  }
}
