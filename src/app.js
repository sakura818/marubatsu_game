import {humanPlayerPieceHolderId,select,put} from "./humanPlayer.js"
import {cpuPieceHolderId,select } from "./cpu.js";
import {init,gameEndCheck} from "./board.js"

humanPlayerPieceHolderId();
cpuPieceHolderId();
init();
select(x,y);
gameEndCheck();
gameStateAlert(gameState, pieceHolderId);
select();
gameEndCheck();
gameStateAlert(gameState, pieceHolderId);
// gameEndCheckの戻り値がENDになるまで
// cpuとhumanを切り替えるポイントが必要











