// アラートとかボタンとかboardとか見た目に関するところ

export function alertAlreadyPutMessage() {
    window.alert("クリックした場所は既にまるかばつで埋まっているため選択することはできません。");
}

// ゲームが終了した時にアラートを出す関数
let gameState;
export function gameStateAlert(gameState, squareHolderId) {
    if (gameState == "end") {
        window.alert(squareHolderId + "Win");
        // TODO : 本当はpieceHolderIdの人物名(human or cpu)を表示したい
    } else if (gameState == "draw") {
        window.alert("draw");
    } else if (gameState == "continue") {
        // TODO : continueのときの処理　
    }
}