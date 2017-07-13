/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = init;
/* harmony export (immutable) */ __webpack_exports__["c"] = isAlreadyPut;
/* harmony export (immutable) */ __webpack_exports__["d"] = put;
/* harmony export (immutable) */ __webpack_exports__["a"] = gameEndCheck;
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

// boardにコマをおく関数
function put(x, y, pieceHolderId) {
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
function gameEndCheck() {
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__humanPlayer_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cpu_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_js__ = __webpack_require__(0);




__WEBPACK_IMPORTED_MODULE_0__humanPlayer_js__["a" /* humanPlayerPieceHolderId */]();
__WEBPACK_IMPORTED_MODULE_1__cpu_js__["a" /* cpuPieceHolderId */]();
__WEBPACK_IMPORTED_MODULE_2__board_js__["b" /* init */]();
__WEBPACK_IMPORTED_MODULE_1__cpu_js__["b" /* select */](x,y);
__WEBPACK_IMPORTED_MODULE_2__board_js__["a" /* gameEndCheck */]();
gameStateAlert(gameState, pieceHolderId);
__WEBPACK_IMPORTED_MODULE_1__cpu_js__["b" /* select */]();
__WEBPACK_IMPORTED_MODULE_2__board_js__["a" /* gameEndCheck */]();
gameStateAlert(gameState, pieceHolderId);
// gameEndCheckの戻り値がENDになるまで
// cpuとhumanを切り替えるポイントが必要













/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = humanPlayerPieceHolderId;
/* unused harmony export select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_js__ = __webpack_require__(0);



// 人間のプレーヤーが行うこと
function humanPlayerPieceHolderId() {
    pieceHolderId = 2;
}

// boardのマスを選択する
function select(x, y) {
    // もし選択したマスが既に埋まっていたらアラートをだす
    if (board.isAlreadyPut(x, y) == false) {
        __WEBPACK_IMPORTED_MODULE_0__ui_js__["a" /* alertAlreadyPutMessage */]();
    }
    put(x, y, pieceHolderId);
} 

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = alertAlreadyPutMessage;
/* unused harmony export gameStateAlert */
// アラートとかボタンとかboardとか見た目に関するところ

function alertAlreadyPutMessage() {
    window.alert("クリックした場所は既にまるかばつで埋まっているため選択することはできません。");
}


// ゲームが終了した時にアラートを出す関数
let gameState;
function gameStateAlert(gameState, pieceHolderId) {
    if (gameState == "end") {
        window.alert(pieceHolderId + " Win");
        // TODO : 本当はpieceHolderIdの人物名(human or cpu)を表示したい
    } else if (gameState == "draw") {
        window.alert("draw");
    } else if (gameState == "continue") {
        // TODO : continueのときの処理　
    }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cpuPieceHolderId;
/* harmony export (immutable) */ __webpack_exports__["b"] = select;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board_js__ = __webpack_require__(0);


// cpuが行うこと

function cpuPieceHolderId() {
        pieceHolderId = 2;
}

// boardのマスを選択する
function select() {
    // マスを選択する方法はランダムに
    let x, y;
    do {
        x = Math.floor(Math.random() * verticalLendth);
        y = Math.floor(Math.random() * horizontalLength);
    } while (__WEBPACK_IMPORTED_MODULE_0__board_js__["c" /* isAlreadyPut */](x, y));
    __WEBPACK_IMPORTED_MODULE_0__board_js__["d" /* put */](x,y,pieceHolderId);
} 


/***/ })
/******/ ]);