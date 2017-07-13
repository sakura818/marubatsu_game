import { isAlreadyPut,put } from "./board.js";

// cpuが行うこと

export function cpuPieceHolderId() {
        pieceHolderId = 2;
}

// boardのマスを選択する
export function select() {
    // マスを選択する方法はランダムに
    let x, y;
    do {
        x = Math.floor(Math.random() * verticalLendth);
        y = Math.floor(Math.random() * horizontalLength);
    } while (isAlreadyPut(x, y));
    put(x,y,pieceHolderId);
} 
