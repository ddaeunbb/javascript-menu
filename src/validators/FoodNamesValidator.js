const CustomError = require('../exceptions/CustomError');
const { ERROR_MESSAGE } = require('../constants/error');
const { REG_KO } = require('../constants/regex');
const { ALL_FOODS } = require('../constants/menu');
const { LEN_FOODNAME } = require('../constants/number');

class FoodNamesValidator {
  /**
  * 문자열 배열이 최소 1개 이상, 2개 이하인지 확인하는 메서드
  * @param {string[]} foodStrArr
  */
  static isLenBetweenOneOrTwo(foodStrArr) {
    const { min, max } = LEN_FOODNAME;
    if(!(foodStrArr.length >= min && foodStrArr.length <= max)) throw new CustomError(ERROR_MESSAGE.shouldLenBetweenZeroAndTwo);
  }
  /**
  * 문자열이 한글로 이뤄져있는지 확인하는 메서드
  * @param {string} food
  */
  static isKoreanStr(food) {
    if(!REG_KO.test(food)) throw new CustomError(ERROR_MESSAGE.shouldKoreanFood);
  }
  /**
  * 문자열이 한글로 이뤄져있는지 확인하는 메서드
  * @param {string} food
  */
  static isIncludedInMenu(food) {
    if(!ALL_FOODS.includes(food)) throw new CustomError(ERROR_MESSAGE.shouldIncludedInMenu);
  }
  /**
  * 문자열이 한글로 이뤄져있는지 확인하는 메서드
  * @param {string[]} foodStrArr
  */
  static validateFoodNames(foodStrArr) {
    this.isLenBetweenOneOrTwo(foodStrArr);
    foodStrArr.forEach(food => {
      this.isKoreanStr(food);
      this.isIncludedInMenu(food);
    })
  }
}

module.exports = FoodNamesValidator;