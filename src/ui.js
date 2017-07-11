import { GameState } from './oxGame.js';

// ボードの駒とIDの連想配列
export const PlayerChar = ['_', '○', '×', '△', '□'];

/**
 * uiに関すること
 *
 */
export const Ui = {
    /**
     * 現在のボードの状況を表示
     */
    printBoard function (board) {
        for (let x = 0; x < board.verticalLength; x++) {
            for (let y = 0; y < board.horizontalLength; y++) {
                let oneSquare = board.gameBoardArray[x][y];
                // TODO:oneSquare名前
                document.getElementById(`${(x * board.horizontalLength) + y}`).innerHTML = PlayerChar[oneSquare];
                // TODO:?
            }
        }
    },
    /**
     * アラートで結果を発表する
     */
    alertResultAnnouncement function (result, playerId) {
        switch (result) {
            case GameState.END:
                window.alert(`${PlayerChar[playerId]}の勝ちです。`)
                // TODO:?
                break;
            case GameState.DRAW:
                window.alert("引き分けです。");
                break;

            default:
                throw new Error("引数resultが予期されないものでした。");
        }
    },
    /**
     * アラートでクリックした場所は既にまるかばつで埋まっているため選択することはできないことを伝える
     */
    alertAlreadyPutMessage function () {
        window.alert("クリックした場所は既にまるかばつで埋まっているため選択することはできません。");
    }
};