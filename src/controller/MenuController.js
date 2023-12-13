const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');

class MenuController {
  startMenuDraw() {
    OutputView.printStartDraw();
    const coachNames = InputView.readCoachNames();
    
  }
}

module.exports = MenuController;