const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const CoachDataList = require('../domain/CoachDataList');
const { strTostrArrConvertor } = require('../utils/Convertor');

class MenuController {
  #coachDataList;

  fillOutNameAndFood() {
    OutputView.printStartDraw();
    const coachNames = InputView.readCoachNames();
    const coachNameArr = strTostrArrConvertor(coachNames);
    this.#coachDataList =  new CoachDataList(coachNameArr);
  }
}

module.exports = MenuController;