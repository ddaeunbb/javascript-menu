const OUTPUT_MESSAGE = Object.freeze({
  printStartDraw: '점심 메뉴 추천을 시작합니다.',
  printResultPhrase: `메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`,
  printFinishDraw: '추천을 완료했습니다.'
});

const INPUT_MESSAGE = Object.freeze({
  readCoachNames: '코치의 이름을 입력해 주세요. (, 로 구분)',
  readCantEatFoods: '(이)가 못 먹는 메뉴를 입력해 주세요.',
});

exports.OUTPUT_MESSAGE = OUTPUT_MESSAGE;
exports.INPUT_MESSAGE = INPUT_MESSAGE;