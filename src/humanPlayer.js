import { alertAlreadyPutMessage } from "./ui.js";
import { isAlreadyPut } from "./board.js";

// 人間のプレーヤーが行うこと
export class HumanPlayer {
    // 真似てコンストラクタをかいてみる
    constructor(playerId) {
        this.playerId = playerId;
    }
}

// boardのマスを選択する
export function select() {
    // もし選択したマスが既に埋まっていたらアラートをだす
    if (board.isAlreadyPut(x, y)) {
        alertAlreadyPutMessage();
    }
    // 選択したマスの情報をどこかの関数に渡してあげる
} 