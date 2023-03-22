import {
  formatDate,
  formatPageInfo,
  formatPureString,
} from '@/lib/utils/formatter';
import { generateOneToNArr } from '@/lib/utils/generator';

describe('Utils Func', () => {
  it('formatDate는 년-월-일 형식으로 반환합니다', () => {
    const formattedDate = formatDate(new Date('2023-03-08 12:30:23'));

    expect(formattedDate).toEqual('2023-3-8');
  });

  it('formatPureString은 공백제거와 소문자변환을 합니다', () => {
    const formattedString = formatPureString('jiHeon PARK');

    expect(formattedString).toEqual('jiheonpark');
  });

  it('formatPageInfo은 현재 페이지의 정보를 반환합니다.', () => {
    const formattedString = formatPageInfo(7, 23, 323);

    expect(formattedString).toEqual('Showing 301 - 323 out of 323');
  });

  it('generateOneToNArr은 1부터 N까지 채워진 연속배열을 반환한다.', () => {
    const generatedArr = generateOneToNArr(3);

    expect(generatedArr).toEqual([1, 2, 3]);
  });
});
