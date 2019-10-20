/** @typedef { import("./types").ILocation } ILocation */
/** @typedef { import("./types").CreateLocationParams } CreateLocationParams */

/** @type { (params: CreateLocationParams) => ILocation } */
export function createLocation (params) {
  return new Location(params)
}

class Location {
  /** @param { CreateLocationParams } params */
  constructor (params) {
    this.x = params.x
    this.y = params.y
    this.isPort = params.isPort
    this.isIsland = params.islandNumber != null
    this.islandNumber = params.islandNumber
    this.ship = null
  }

  get hasShip () {
    return this.ship != null
  }

  setShip (ship) {
    this.ship = ship
  }

  removeShip () {
    this.ship = null
  }

  clonedWithLocation (x, y) {
    return new Location({
      x,
      y,
      isPort: this.isPort,
      islandNumber: this.islandNumber
    })
  }
}
