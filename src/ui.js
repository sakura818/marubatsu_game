// アラートとかボタンとかboardとか見た目に関するところ

export function alertAlreadyPutMessage() {
    window.alert("クリックした場所は既にまるかばつで埋まっているため選択することはできません。");
}


// ゲームが終了した時にアラートを出す関数
let gameState;
export function gameStateAlert() {
    // TODO: gameStateを引数にもつ
    if (gameState == "end") {
        window.alert("You Win")
    } else if (gameState == "draw") {
        window.alert("draw")
    } else if (gameState == "continue") {
    }
}