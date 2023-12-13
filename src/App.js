const MenuController = require('./controller/MenuController');

class App {
	#controller = new MenuController();
  play() {
		this.#controller.startMenuDraw();
	}
}

module.exports = App;
