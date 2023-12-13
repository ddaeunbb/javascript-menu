const CoachNamesValidator = require('../validators/CoachNamesValidator');

/**
 * @classdesc CoachDataList
 * 코치들의 인적사항을 담아두고 있는 클래스
 */
class CoachDataList {
  #coachList;

  constructor(coachNameArr) {
    CoachNamesValidator.validateCoachNames(coachNameArr);
  }
}

module.exports = CoachDataList;