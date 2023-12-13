const { SYMBOL } = require('../constants/symbol');

/**
* 코치 이름을 쉼표 기준으로 문자열 배열로 바꿔주는 함수
* @param {string} coachNames
* @return {string[]}
*/
const coachNamesConvertor = (coachNames) => coachNames.split(SYMBOL.comma);


exports.coachNamesConvertor = coachNamesConvertor;