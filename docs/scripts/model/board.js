/** @typedef { import("./types").IBoard } IBoard */
/** @typedef { import("./types").ILocation } ILocation */
/** @typedef { import("./types").CreateBoardParams } CreateBoardParams */

import { getSubBoards } from './sub-boards'

/** @type { (params: CreateBoardParams) => IBoard } */
export function createBoard (params) {
  /** @type { IBoard[] } */
  let subBoards

  switch (params.boards) {
    case 1:
      subBoards = getSubBoards(1)
      return subBoards[0]

    case 2:
      subBoards = getSubBoards(2)
      const result = subBoards[0]
      const subBoard1 = subBoards[1]

      for (let row = 0; row < result.squares.length; row++) {
        /** @type { ILocation[] } */
        for (let col = 0; col < result.squares[0].length; col++) {
          const newRow = subBoard1.squares[row].map(location =>
            location.clonedWithLocation(col, row + result.squares.length)
          )
          result.squares.push(newRow)
        }
      }

      return result
    /*
    case 4:
      subBoards = getSubBoards(4)
    */
    default: throw new Error(`invalid number of boards supplied: ${params.boards}`)
  }
}
