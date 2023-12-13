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
    const canEatList = this.#coachDataList.listUpCantEatFoods();
    this.#drawMachine.drawMenu(canEatList);
  }

  announceDrawResult() {
    OutputView.printResultPhrase();
    const totalCategory = this.#drawMachine.getTotalCategory();
    OutputView.printTotalCategory(totalCategory);
    const totalCoaches = this.#coachDataList.getTotalCoachNames();
    const totalMenu = this.#drawMachine.getTotalMenu();
    totalMenu.forEach((menu, idx) => {
      OutputView.printTotalMenu(totalCoaches[idx], menu);
    })
    OutputView.printFinishDraw();
  }
}

module.exports = MenuController;