const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const CoachDataList = require('../domain/CoachDataList');
const { strTostrArrConvertor } = require('../utils/Convertor');
const DrawMachine = require('../domain/DrawMachine');

class MenuController {
  #coachDataList;
  #drawMachine = new DrawMachine();

  fillOutNameAndFood() {
    OutputView.printStartDraw();
    const coachNames = InputView.readCoachNames();
    const coachNameArr = strTostrArrConvertor(coachNames);
    this.#coachDataList =  new CoachDataList(coachNameArr);
  }

  drawCategoryAndMenu() {
    this.#drawMachine.drawCategory();
  }
}

module.exports = MenuController;