const MenuController = require('./controller/MenuController');

class App {
	#controller = new MenuController();
  play() {
		this.#controller.fillOutNameAndFood();
		this.#controller.drawCategoryAndMenu();
	}
}

module.exports = App;
