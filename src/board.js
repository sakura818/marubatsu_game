// boardの仕組みに関するところ

// とりあえずコンストラクタを真似てかいてみる
counstructor(verticalLendth, horizontalLength)
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

function init() {
    let board = new Array(verticalLendth);
    for (x = 0; x < verticalLendth; x++) {
        board[x] = new Array(horizontalLength);
        for (y = 0; y < horizontalLength; y++) {
            board[x][y] = 0;
        }
    }
}

// 選択したマスがボード上で埋まっているか確認する 埋まっているかいないかboolean値で返す　埋まっていたらtrue、埋まっていなかったらfalse
function isAlreadyPut(x, y) {
    this.board[x][y] !== 0;
}

