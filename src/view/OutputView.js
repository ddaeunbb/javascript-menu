const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE }= require('../constants/message')

const OutputView = Object.freeze({
  printStartDraw() {
    Console.print(OUTPUT_MESSAGE.printStartDraw);
  },

  printResultPhrase() {
    Console.print(OUTPUT_MESSAGE.printResultPhrase);
  },

  printTotalCategory(totalCategory) {
    let phrase = '[ 카테고리 ';
    totalCategory.forEach((category, idx) => {
      phrase += `| ${category} `;
      if(totalCategory.length === idx + 1) phrase += ']';
    });
    Console.print(phrase);
  },

  printTotalMenu(coach, totalMenu) {
    let phrase = `[ ${coach} `;
    totalMenu.forEach((menu, idx) => {
      phrase += `| ${menu} `
      if(totalMenu.length === idx + 1) phrase += ']';
    })
    Console.print(phrase);
  },

  printFinishDraw() {
    Console.print(OUTPUT_MESSAGE.printFinishDraw);
  }
});

module.exports = OutputView;