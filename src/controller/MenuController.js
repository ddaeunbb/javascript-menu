const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const CoachDataList = require('../domain/CoachDataList');
const { coachNamesConvertor } = require('../utils/Convertor');

class MenuController {
  #coachDataList;

  startMenuDraw() {
    OutputView.printStartDraw();
    const coachNames = InputView.readCoachNames();
    const coachNameArr = coachNamesConvertor(coachNames);
    this.#coachDataList =  new CoachDataList(coachNameArr);
  }
}

module.exports = MenuController;