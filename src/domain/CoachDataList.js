const CoachNamesValidator = require('../validators/CoachNamesValidator');
const { strTostrArrConvertor } = require('../utils/Convertor');
const InputView = require('../view/InputView');
const FoodNamesValidator = require('../validators/FoodNamesValidator');
const { SYMBOL } = require('../constants/symbol');

/**
 * @classdesc CoachDataList
 * 코치들의 인적사항을 담아두고 있는 클래스
 */
class CoachDataList {
  #coachList = new Map();

  constructor(coachNameArr) {
    CoachNamesValidator.validateCoachNames(coachNameArr);
    this.setLists(coachNameArr);
  }

  setLists(coachNameArr) {
    coachNameArr.forEach(name => {
      const foodStr = InputView.readCantEatFoods(name);
      if(foodStr === SYMBOL.none) this.#coachList.set(name, []);
      else {
        const foodStrArr = strTostrArrConvertor(foodStr);
        FoodNamesValidator.validateFoodNames(foodStrArr);
        this.#coachList.set(name, foodStrArr);
      }
    })
  }

  listUpCantEatFoods() {
    const cantEatFoodList = [];
    this.#coachList.forEach((foodArr) => {
      cantEatFoodList.push(foodArr);
    })
    return cantEatFoodList;
  }

  getTotalCoachNames() {
    return [...this.#coachList.keys()];
  }
}

module.exports = CoachDataList;