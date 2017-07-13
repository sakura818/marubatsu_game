import { humanPlayerSquareHolderId, humanPlayerSelectSquare, put } from "./humanPlayer.js"
import { cpuSquareHolderId, cpuSelectSquare } from "./cpu.js";
import { boardSetting, gameEndCheck } from "./board.js"



function change(){
    document.getElementById("id01").innerHTML = "我が輩は犬である。";
}




//alert(humanPlayerSquareHolderId() + "Win");

humanPlayerSquareHolderId();
cpuSquareHolderId();
boardSetting();
humanPlayerSelectSquare(x, y);
gameEndCheck();
gameStateAlert(gameState, squareHolderId);
cpuSelectSquare();
gameEndCheck();
gameStateAlert(gameState, squareHolderId);
// gameEndCheckの戻り値がENDになるまで　これなんかいい方法ありそう
// cpuとhumanを切り替えるポイントが必要










