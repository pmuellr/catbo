/** @typedef { import("./types").IBoard } IBoard */
/** @typedef { import("./types").ILocation } ILocation */

import { shuffle } from './lib/shuffle'
import { createLocation } from './location'

/** @type { (subBoards: number) => IBoard[] } */
export function getSubBoards (subBoardCount) {
  let subBoards = [ ParsedSubBoard1, ParsedSubBoard2, ParsedSubBoard3, ParsedSubBoard4 ]
  subBoards = shuffle(subBoards)

  return shuffle(subBoards).slice(0, subBoardCount)
}

/** @type { (boardString: string) => IBoard } */
function parseBoard (boardString) {
  /** type { ILocation[][] } */
  const squares = []
  const lines = boardString.trim().split('\n')
  for (let row = 0; row < lines.length; row++) {
    const line = lines[row]
    const cols = line.split('')

    /** @type { ILocation[] } */
    const locations = []
    squares.push(locations)

    for (let col = 0; col < cols.length; col++) {
      const c = cols[col]
      let islandNumber
      let isPort = false
      if (c === 'P') isPort = true
      if (c !== '-') {
        islandNumber = getIslandNumber[c]
      }
      const location = createLocation({ y: row, x: col, isPort, islandNumber })
      locations.push(location)
    }
  }
  return { squares }
}

const SubBoard1 = `
A-2--8
---P--
-3---4
B---7-
`

const SubBoard2 = `
B---2-
--P--2
---5--
7C---A
`

const SubBoard3 = `
-4---5
----P-
C6-3--
-B---8
`

const SubBoard4 = `
-----3
--6---
A---4-
2-P--5
`

const ParsedSubBoard1 = parseBoard(SubBoard1)
const ParsedSubBoard2 = parseBoard(SubBoard2)
const ParsedSubBoard3 = parseBoard(SubBoard3)
const ParsedSubBoard4 = parseBoard(SubBoard4)

/** type { (c: string) => number } */
function getIslandNumber (c) {
  return parseInt(c, 16)
}
