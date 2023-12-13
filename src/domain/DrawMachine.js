const { Random } = require('@woowacourse/mission-utils');
const { RANDOM_NUM } = require('../constants/number');
const { CATEGORY } = require('../constants/menu');
/**
 * @classdesc DrawMachine
 * 카테고리와 메뉴 추첨을 담당합니다.
 */
class DrawMachine {
  #category = Array.from({length: RANDOM_NUM.end}, () => 0);
  #categoryCount = new Map([[1,0],[2,0],[3,0],[4,0],[5,0]]);

  drawCategory() {
    const { start, end } = RANDOM_NUM;
    this.#category.forEach((_, idx)=> {
      while(this.#category[idx] === 0){
        const randomNum = Random.pickNumberInRange(start, end);
        const count = this.#categoryCount.get(randomNum);
        if(count < 2){
          this.#category[idx] = CATEGORY[randomNum];
          this.#categoryCount.set(randomNum, this.#categoryCount.get(randomNum) + 1);
        }
      }
    })  
  }
}

module.exports = DrawMachine;