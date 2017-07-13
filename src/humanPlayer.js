import { alertAlreadyPutMessage } from "./ui.js";
import { isAlreadyPut } from "./board.js";

// 人間のプレーヤーが行うこと
export function humanPlayerPieceHolderId() {
    pieceHolderId = 2;
}

// boardのマスを選択する
export function select(x, y) {
    // もし選択したマスが既に埋まっていたらアラートをだす
    if (board.isAlreadyPut(x, y) == false) {
        alertAlreadyPutMessage();
    }
    put(x, y, pieceHolderId);
} 