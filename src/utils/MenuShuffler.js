const { Random } = require('@woowacourse/mission-utils');
const { MENU } = require('../constants/menu');

/**
* 카테고리 음식 중에서 무작위로 하나의 메뉴를 뽑아주는 함수 (리스트에 포함되지 않는)
* @param {string} category
* @param {string[]} list
* @return {string}
*/
const menuShuffler = (category, list) => {
  const menuArr = MENU[category].split(', ');
  let menu = list[0];
  while(list.includes(menu)){
    const idx = Random.shuffle(menuArr)[0];
    menu = menuArr[idx-1];
  }
  return menu;
}

exports.menuShuffler = menuShuffler;