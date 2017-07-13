import { isAlreadyPut, put } from "./board.js";

// cpuが行うこと

export function cpuSquareHolderId() {
   let squareHolderId = 2;
    return squareHolderId;
}

// boardのマスを選択する
export function cpuSelectSquare() {
    // マスを選択する方法はランダムに
    let x, y;
    do {
        x = Math.floor(Math.random() * verticalLendth);
        y = Math.floor(Math.random() * horizontalLength);
    } while (isAlreadyPut(x, y));
    put(x, y, squareHolderId);
} 
