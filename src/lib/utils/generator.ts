import { IOrderItem } from '@/interface/main';
import { formatDate } from './formatter';

const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const generateStartAndEndDate = (data: IOrderItem[]) => {
  const dateList = data.map(
    ({ transaction_time }) => new Date(transaction_time),
  );

  const startDate = formatDate(minDate(dateList));
  const endDate = formatDate(maxDate(dateList));

  return [startDate, endDate];
};

export const generateOneToNArr = (n: number) =>
  Array.from({ length: n }, (_, i) => i + 1);
