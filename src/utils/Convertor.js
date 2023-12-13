const { SYMBOL } = require('../constants/symbol');

/**
* 문자열을 쉼표 기준으로 문자열 배열로 바꿔주는 함수
* @param {string} str
* @return {string[]}
*/
const strTostrArrConvertor = (str) => str.split(SYMBOL.comma);


exports.strTostrArrConvertor = strTostrArrConvertor;