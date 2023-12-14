const FoodNamesValidator = require('../../src/validators/FoodNamesValidator');
const { ERROR_MESSAGE } = require('../../src/constants/error');

describe('먹지 못하는 음식 입력 테스트', () => {
  // given
  const notLenBetweenOneAndTwo = [['규동', '김밥', '짜장면'], ['미소시루', '라멘', '스파게티', '피자']];
  
  test.each(notLenBetweenOneAndTwo)
  ('못먹는 음식은 최소 1개 최대 2개여야 합니다.', (input) => {
    expect(() => FoodNamesValidator.validateFoodNames(input).toThrow(ERROR_MESSAGE.shouldLenBetweenZeroAndTwo));
  })

  // given
  const notKoreanNames = [['', '규동'], ['gimbab', '규동'], ['123', '라멘']];

  test.each(notKoreanNames)
  ('못먹는 음식은 최소 1개 최대 2개여야 합니다.', (input) => {
    expect(() => FoodNamesValidator.validateFoodNames(input).toThrow(ERROR_MESSAGE.shouldKoreanFood));
  })

  // given
  const notIncludedMenu = [['김밥말이', '규동'], ['규동', '마라탕'], ['동파육', '샤오룽바오']];

  test.each(notIncludedMenu)
  ('못먹는 음식은 최소 1개 최대 2개여야 합니다.', (input) => {
    expect(() => FoodNamesValidator.validateFoodNames(input).toThrow(ERROR_MESSAGE.shouldIncludedInMenu));
  })
})