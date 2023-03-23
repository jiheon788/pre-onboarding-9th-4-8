import { generateStartAndEndDate } from '@/lib/utils/generator';
import { generateOneToNArr } from '@/lib/utils/generator';

const fakeValue = [
  {
    id: 498,
    transaction_time: '2022-01-01 17:34:39',
    status: true,
    customer_id: 512,
    customer_name: 'Ulric Gibson',
    currency: '$59.78',
  },
  {
    id: 499,
    transaction_time: '2023-02-02 18:00:48',
    status: false,
    customer_id: 513,
    customer_name: 'Forrest Chaney',
    currency: '$41.48',
  },
  {
    id: 500,
    transaction_time: '2024-03-03 11:54:15',
    status: false,
    customer_id: 514,
    customer_name: 'Rama Sheppard',
    currency: '$0.46',
  },
];

describe('generator function test', () => {
  it('generateStartAndEndDate는 주어진 배열에서 시작 날짜와 종료 날짜를 반환합니다', () => {
    const [startDate, endDate] = generateStartAndEndDate(fakeValue);
    expect(startDate).toBe('2022-1-1');
    expect(endDate).toBe('2024-3-3');
  });

  it('generateOneToNArr은 1부터 N까지 채워진 연속배열을 반환한다.', () => {
    const generatedArr = generateOneToNArr(3);
    expect(generatedArr).toEqual([1, 2, 3]);
  });
});
