/**
 * 人間のプレイヤー
 *
 */
export class HumanPlayer {
    constructor(playerId) {
        this.playerId = playerId;
    }

    /**
     * ユーザーが選択した場合に呼び出される関数
     * もしすでにまるかばつが置かれていたらアラートをだす
     */
    select(board, Ui, x, y) {
        if (board.isAlreadyPut(x, y)) {
            Ui.alertAlreadyPutMessage();
        }
        board.put(x, y, this.playerId);
    }
}