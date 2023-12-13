const MissionUtils = require('@woowacourse/mission-utils');

const { Console} = MissionUtils;
const { INPUT_MESSAGE }= require('../constants/message')

const InputView = Object.freeze({
  readCoachNames() {
    let input = '';
    Console.readLine(INPUT_MESSAGE.readCoachName, (names) => {
      input = names;
    });
    return input;
  }
});

module.exports = InputView;