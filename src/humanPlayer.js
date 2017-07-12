import { alertAlreadyPutMessage } from './ui.js';

// 人間のプレーヤーが行うこと


// boardのマスを選択する
export function select(){
    // もし選択したマスが既に埋まっていたらアラートをだす
    alertAlreadyPutMessage();
    // 選択したマスの情報をどこかの関数に渡してあげる

} 