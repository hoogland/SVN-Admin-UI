export class Game {
    id: number;
    player_white: number;
    player_black: number;
    result: number; // 1-3  (1 = 1-0; 2 = 1/2-1/2; 3 = 0-1)
    rating: boolean;
    pgn: any;
}
