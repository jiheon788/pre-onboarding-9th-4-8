import { rest } from 'msw';
import { formatDollarToNumber } from '@/lib/utils/formatter';
import { generateStartAndEndDate } from '@/lib/utils/generator';
import mockData from '../storage/mock_data.json';

export const orderListHandlers = [
  rest.get('/mock/order', (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset'));
    const limit = Number(req.url.searchParams.get('limit'));
    const date = req.url.searchParams.get('date');
    const customer = req.url.searchParams.get('customer');
    const filter = req.url.searchParams.get('filter');
    const sort = req.url.searchParams.get('sort');

    let copiedMockData = [...mockData];

    if (date) {
      copiedMockData = copiedMockData.filter(
        (item) => item.transaction_time.split(' ')[0] === date,
      );
    }

    if (customer) {
      copiedMockData = copiedMockData.filter(
        (item) => item.customer_name === customer,
      );
    }

    if (sort === 'id-ascending')
      copiedMockData = copiedMockData.sort((a, b) => a.id - b.id);

    if (sort === 'id-descending')
      copiedMockData = copiedMockData.sort((a, b) => b.id - a.id);

    if (sort === 'time-ascending')
      copiedMockData = copiedMockData.sort(
        (a, b) =>
          new Date(a.transaction_time).getTime() -
          new Date(b.transaction_time).getTime(),
      );

    if (sort === 'time-descending')
      copiedMockData = copiedMockData.sort(
        (a, b) =>
          new Date(b.transaction_time).getTime() -
          new Date(a.transaction_time).getTime(),
      );

    if (filter === 'complete') {
      copiedMockData = copiedMockData.filter((item) => item.status === true);
    }

    if (filter === 'incomplete') {
      copiedMockData = copiedMockData.filter((item) => item.status === false);
    }

    const [startDate, endDate] =
      copiedMockData.length > 0
        ? generateStartAndEndDate(copiedMockData)
        : [date, date];

    return res(
      ctx.json({
        order: [...copiedMockData].splice(offset * limit, limit) || [],
        orderInfo: {
          totalCount: copiedMockData.length || 0,
          totalCurrency:
            copiedMockData.reduce(
              (acc, cur) => acc + formatDollarToNumber(cur.currency),
              0,
            ) || 0,
          startDate,
          endDate,
        },
      }),
    );
  }),

  rest.get('/mock/customers', (req, res, ctx) => {
    const customers = [...new Set(mockData.map((item) => item.customer_name))];

    return res(
      ctx.json({
        customers,
      }),
    );
  }),
];
