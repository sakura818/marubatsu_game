// boardの仕組みに関するところ

// boardの縦の値、横の値を変数化
let verticalLendth = 3;
let horizontalLength = 3;

export const GAMESTATE = Object.freeze({ END: "end", CONTINUE: "continue", DRAW: "draw" });


// コンストラクタ　boardのたて、よこの値とboardのすべてのマスを0に初期化する
export function boardSetting(verticalLendth, horizontalLength) {
    this.verticalLendth = verticalLendth;
    this.horizontalLength = horizontalLength;
    this.init()
}

// boardの2次元配列を作成し、すべてのマスの値を0に初期化する
let x, y;
export function init() {
    let board = new Array(verticalLendth);
    for (x = 0; x < verticalLendth; x++) {
        board[x] = new Array(horizontalLength);
        for (y = 0; y < horizontalLength; y++) {
            board[x][y] = 0;
        }
    }
}

// 選択したマスがボード上で埋まっているか確認する 埋まっているかいないかboolean値で返す　埋まっていたらtrue、埋まっていなかったらfalse
export function isAlreadyPut(x, y) {
    return this.board[x][y] !== 0;
}

// boardにコマをおく関数 コマをおいた場所にはhumanPlayerなら1、cpuなら2がはいる(初期値は0)
export function put(x, y, squareHolderId) {
    board[x][y] = squareHolderId;
}

// 判定条件　横に一列並んだか　戻り値としてゲームの状態値をかえす
// 一列に並んでる　= 同じ数字(111か222のとき 000は除く)
/*
function horizontalLineUp() {
    for (x = 0; x < horizontalLength; y++) {
        for (y = 0; y < verticalLendth; x++) {
            boardx[x][y] !== squareHolderId

            // TODO: 一列同じ数字だったらの処理 
            return gameState == "end"
        }
    }
    return gameState = "continue";
}
*/

// 判定条件　横に一列並んだか　戻り値としてゲームの状態値をかえす
function horizontalLineUp() {
    if ((board[0][0] == board[0][1] == board[0][2]) || (board[1][0] == board[1][1] == board[1][2]) || (board[2][0] == board[2][1] == board[2][2])) {
        return GAMESTATE.END;
    }
    return GAMESTATE.CONTINUE;
}

// 判定条件　縦に一列並んだか 戻り値としてゲームの状態値をかえす
function verticalLineUp() {
    if ((board[0][0] == board[1][0] == board[2][0]) || (board[0][1] == board[1][1] == board[2][1]) || (board[0][2] == board[1][2] == board[2][2])) {
        return GAMESTATE.END;
    }
    return GAMESTATE.CONTINUE;
}

// 判定条件　ななめ（右斜上）に一列並んだか　戻り値としてゲームの状態値をかえす
function upperRightDiagonalLineUp() {
    if (board[2][0] == board[1][1] == board[0][2]) {
        return GAMESTATE.END;
    }
    return GAMESTATE.CONTINUE;
}

// 判定条件　ななめ（右斜下）に一列並んだか　戻り値としてゲームの状態値をかえす
function lowerRightDiagonalLineUp() {
    if (board[0][0] == board[1][1] == board[2][2]) {
        return GAMESTATE.END;
    }
    return GAMESTATE.CONTINUE;
}

// 引き分けかどうか判定する
function draw() {

    return GAMESTATE.END;
}

// ゲームが終了したかどうか確認する
export function gameEndCheck() {
    if (horizontalLineUp() == "end") {
        return GAMESTATE.END;
    }
    if (verticalLineUp() == "end") {
        return GAMESTATE.END;
    }
    if (upperRightDiagonalLineUp() == "end") {
        return GAMESTATE.END;
    }
    if (lowerRightDiagonalLineUp() == "end") {
        return GAMESTATE.END;
    }
    return GAMESTATE.CONTINUE;
}