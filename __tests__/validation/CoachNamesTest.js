const CoachNamesValidator = require('../../src/validators/CoachNamesValidator');
const { ERROR_MESSAGE } = require('../../src/constants/error');

describe('코치 이름 입력 테스트', () => {
  //given
  const notKoreanNames = [['daeun','phoco'], ['다은1', '포비2']];

  test.each(notKoreanNames)
  ('코치 이름은 한글만 입력할 수 있습니다.', (input) => {
    expect(() => CoachNamesValidator.validateCoachNames(input).toThrow(ERROR_MESSAGE.shouldKoreanName));
  })

  //given
  const notNameLenBetweenTwoAndFour = [['다은킹왕짱', '포비'], ['다은', '포비킹왕짱'], ['킹', '다은']];

  test.each(notNameLenBetweenTwoAndFour)
  ('코치 이름은 최소 2글자, 최대 4글자여야 합니다.', (input) => {
    expect(() => CoachNamesValidator.validateCoachNames(input).toThrow(ERROR_MESSAGE.shouldLenBetweenTwoAndFour));
  })

  //given
  const totalCoachBetweenTwoAndFive = [['포비', '제임스', '다은', '앤드류', '지미', '스미스'], ['요코']];

  test.each(totalCoachBetweenTwoAndFive)
  ('코치는 총 최소 2명 최대 5명이여야 합니다.', (input) => {
    expect(() => CoachNamesValidator.validateCoachNames(input).toThrow(ERROR_MESSAGE.shouldPeopleBetweenTwoAndFive));
  })
})