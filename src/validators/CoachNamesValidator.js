const CustomError = require('../exceptions/CustomError');
const { LEN_COACHNAME } = require('../constants/number');
const { ERROR_MESSAGE } = require('../constants/error');
const { REG_KO } = require('../constants/regex');

class CoachNamesValidator {
  /**
  * 문자열의 길이가 2와 4사이인지 확인하는 메서드
  * @param {string} coachName
  */
  static isLenBetweenTwoAndFour(coachName) {
    const { min, max } = LEN_COACHNAME;
    if(!(coachName.length >= min && coachName.length <= max)) throw new CustomError(ERROR_MESSAGE.shouldLenBetweenTwoAndFour);
  }
  /**
  * 문자열이 한글로 이뤄져있는지 확인하는 메서드
  * @param {string} coachName
  */
  static isKoreanName(coachName) {
    if(!REG_KO.test(coachName)) throw new CustomError(ERROR_MESSAGE.shouldKoreanName);
  }
  /**
  * 코치의 인원이 최소 2명, 최대 4명인지 확인하는 메서드
  * @param {string[]} coachNames
  */
  static isPeopleBetweenTwoAndFour(coachName) {
    const { min, perMax } = LEN_COACHNAME;
    if(!(coachName.length >= min && coachName.length <= perMax)) throw new CustomError(ERROR_MESSAGE.shouldPeopleBetweenTwoAndFive);
  }
  /**
  * @param {string[]} coachNames
  */
  static validateCoachNames(coachNames) {
    this.isPeopleBetweenTwoAndFour(coachNames);
    coachNames.forEach(name => {
      this.isLenBetweenTwoAndFour(name);
      this.isKoreanName(name);
    })
  }
}

module.exports = CoachNamesValidator;