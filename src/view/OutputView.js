const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE }= require('../constants/message')

const OutputView = Object.freeze({
  printStartDraw() {
    Console.print(OUTPUT_MESSAGE.printStartDraw);
  }
});

module.exports = OutputView;