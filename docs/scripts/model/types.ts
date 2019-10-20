export interface CreateBoardParams {
  boards: number; // number of 4x6 boards to use; 1, 2, or 4 currently
}

export interface IBoard {
  squares: ILocation[][];
}

export interface CreateLocationParams {
  x: number;
  y: number;
  isPort: boolean;
  islandNumber?: number | null | undefined;
}

export interface ILocation {
  x: number;
  y: number;
  isPort: boolean;
  isIsland: boolean;
  hasShip: boolean;
  islandNumber: number;
  ship: IShip;
  setShip(ship: IShip): void;
  removeShip(): void;
  clonedWithLocation (x: number, y: number): ILocation;
}

export interface IShip {
  color: string;
  location: ILocation;
  treasure: Record<string, number>;
  moveTo (location: ILocation): void;
}

