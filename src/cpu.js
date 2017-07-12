// cpuが行うこと

export class Cpu {
    constructor(playerId) {
        this.playerId = playerId;
    }

}

// boardのマスを選択する
export function select() {
    // マスを選択する方法はランダムに
    // x座標とy座標を選択するので
    let x, y;
    x = Math.random * verticalLendth;
    y = Math.random * horizontalLength;

    // 選択したマスの情報をどこかの関数に渡してあげる

} 
