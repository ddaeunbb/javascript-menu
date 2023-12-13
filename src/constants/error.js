const ERROR_HEADER = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  shouldLenBetweenTwoAndFour: '코치 이름은 최소 2글자 이상, 최대 4글자까지 입니다.',
  shouldKoreanName: '이름은 모두 한글이여야합니다.',
  shouldPeopleBetweenTwoAndFive: '인원은 최소 2명이상, 최대 4명 이하입니다.',
  shouldKoreanFood: '메뉴 이름은 모두 한글이여아합니다.',
  shouldIncludedInMenu: '못먹는 음식은 메뉴에 포함되어있어야합니다.',
  shouldLenBetweenZeroAndTwo: '못먹는 음식은 최소 0개 최대 2개까지 입력할 수 있습니다.',
});

exports.ERROR_HEADER = ERROR_HEADER;
exports.ERROR_MESSAGE = ERROR_MESSAGE;