const OutputView = require('../view/OutputView');

class MenuController {
  startMenuDraw() {
    OutputView.printStartDraw();
  }
}

module.exports = MenuController;