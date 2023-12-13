const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE }= require('../constants/message')

const InputView = Object.freeze({
  readCoachNames() {
    let input = '';
    Console.readLine(INPUT_MESSAGE.readCoachName, (names) => {
      input = names;
    });
    return input;
  },

  readCantEatFoods(name) {
    let input = '';
    Console.readLine(`${name}${INPUT_MESSAGE.readCantEatFoods}`, (foods) => {
      input = foods;
    });
    return input;
  }
});

module.exports = InputView;