import { humanPlayerSquareHolderId, humanPlayerSelectSquare, put } from "./humanPlayer.js"
import { cpuSquareHolderId, cpuSelectSquare } from "./cpu.js";
import { init, gameEndCheck } from "./board.js"

let i = 3;
alert(humanPlayerSquareHolderId + "Win");
humanPlayerSquareHolderId();




humanPlayerSquareHolderId();
cpuSquareHolderId();
init();
humanPlayerSelectSquare(x, y);
gameEndCheck();
gameStateAlert(gameState, squareHolderId);
cpuSelectSquare();
gameEndCheck();
gameStateAlert(gameState, squareHolderId);
// gameEndCheckの戻り値がENDになるまで　これなんかいい方法ありそう
// cpuとhumanを切り替えるポイントが必要










