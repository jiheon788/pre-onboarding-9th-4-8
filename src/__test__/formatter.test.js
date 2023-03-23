import {
  formatDate,
  formatPureString,
  formatDollarToNumber,
  formatNumToDollar,
  formatPageInfo,
} from '@/lib/utils/formatter';

describe('formatter function test', () => {
  it('formatPageInfo는 현재 불러온 페이지의 목록 개수 정보를 반홥합니다.', () => {
    const pageInfo = formatPageInfo(1, 50, 500);
    expect(pageInfo).toBe('Showing 1 - 50 out of 500');
  });

  it('formatDate는 년-월-일 형식으로 반환합니다', () => {
    const formattedDate = formatDate(new Date('2023-03-08 12:30:23'));

    expect(formattedDate).toEqual('2023-3-8');
  });

  it('formatPureString은 공백제거와 소문자변환을 합니다', () => {
    const formattedString = formatPureString('jiHeon PARK');

    expect(formattedString).toEqual('jiheonpark');
  });

  it('dollar to number', () => {
    expect(formatDollarToNumber('$38')).toEqual(38);
  });
  it('number to dollar', () => {
    expect(formatNumToDollar(38)).toEqual('$ 38');
  });
});
