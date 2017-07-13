// boardの仕組みに関するところ

// とりあえずコンストラクタを真似てかいてみる
function boardSetting(verticalLendth, horizontalLength)
{
    this.verticalLendth = verticalLendth;
    this.horizontalLength = horizontalLength;

    this.init()
}


// boardの縦の値、横の値を変数化
let verticalLendth = 3;
let horizontalLength = 3;

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
    this.board[x][y] !== 0;
}

// boardにコマをおく関数
export function put(x, y, pieceHolderId) {
    board[x][y]

}

// xがよこvertical yがたてhorizontal
// 判定条件　横に一列並んだか　戻り値としてゲームの状態値をかえす
// x,yの場所にコマをおくのに、だれがおいたかも情報として保持してなきゃいけない
// それを数字で管理する　まだ誰もおかれてないコマは0 人間が置いたコマは1 CPUがおいたコマは2にする
// てことは一列に並んでる　= 同じ数字がならんでる　0も？　いや0はちがう　1か2が並んでる
function horizontalLineUp() {
    for (y = 0; y < horizontalLength; y++) {
        for (x = 0; x < verticalLendth; x++) {
            // TODO: 一列同じ数字だったらの処理 
            return gameState == "end"
        }
    }
    return gameState = "continue";
}

// 判定条件　縦に一列並んだか 戻り値としてゲームの状態値をかえす
function verticalLineUp() {
    for (x = 0; x < verticalLendth; x++) {
        for (y = 0; y < horizontalLength; y++) {
            // TODO: 一列同じ数字だったらの処理 
            return gameState == "end"
        }
    }
    return gameState = "continue";
}

// 判定条件　ななめ（右斜上）に一列並んだか　戻り値としてゲームの状態値をかえす
function upperRightDiagonalLineUp() {
    if (board[2][0] == board[1][1] == board[0][2]) {
        return gameState == "end"
    }
    return gameState = "continue";
}

// 判定条件　ななめ（右斜下）に一列並んだか　戻り値としてゲームの状態値をかえす
function lowerRightDiagonalLineUp() {
    if (board[0][0] == board[1][1] == board[2][2]) {
        return gameState == "end"
    }
    return gameState = "continue";
}


// ゲームが終了したかどうか確認する
export function gameEndCheck() {
    if (horizontalLineUp() == end) {
        return gameState == end;
    }
    if (verticalLineUp() == end) {
        return gameState == end;
    }
    if (upperRightDiagonalLineUp() == end) {
        return gameState == end;
    }
    if (lowerRightDiagonalLineUp() == end) {
        return gameState == end;
    }
}