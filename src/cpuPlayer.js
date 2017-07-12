/**
 * コンピュータのプレイヤー
 *
 */
class Cpu {
    constructor(playerId) {
        this.playerId = playerId;
    }

    /**
     * CPUがボードに何を置くか決めるメソッド
     */
    select() {
        //呼ばれない限り例外発生しないのでcatchしなくても良い
        throw Error("不正なCPUが呼ばれました。");
    }
}

export class RandomEasyCpu extends Cpu {
    constructor(playerId) {
        super(playerId);
    }

    /**
    * 盤面が埋まるまで たて、よこの座標をランダムに決めて適当に駒をおく
    *
    *
    */

    select(board) {
        let x, y;
        do {
            x = Math.floor(Math.random() * board.verticalLength);
            y = Math.floor(Math.random() * board.horizontalLength);
        } while (board.isAlreadyPut(x, y));
        board.put(x, y, this.playerId);
    }
}