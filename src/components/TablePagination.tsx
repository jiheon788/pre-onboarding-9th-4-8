import { Button, Stack } from '@chakra-ui/react';
import useQueryString from '@/lib/hooks/useQueryString';
import { ITEMS_PER_PAGE } from '@/constants/units';
import { generateOneToNArr } from '@/lib/utils/generator';
import useOrderQuery from '@/lib/hooks/useOrderQuery';

const TablePagination = () => {
  const { getParams, setParams } = useQueryString();
  const [orderResult] = useOrderQuery(
    getParams('page'),
    getParams('date'),
    getParams('customer'),
    getParams('filter'),
    getParams('sort'),
  );

  return (
    <Stack
      spacing={2}
      direction="row"
      align="center"
      data-testid="table-pagenation"
    >
      {generateOneToNArr(
        Math.ceil(orderResult.data.orderInfo.totalCount / ITEMS_PER_PAGE),
      ).map((num) => (
        <Button
          type="button"
          colorScheme="gray"
          size="sm"
          key={num}
          onClick={() => setParams('page', String(num))}
          variant={Number(getParams('page')) === num ? 'solid' : 'outline'}
        >
          {num}
        </Button>
      ))}
    </Stack>
  );
};

export default TablePagination;
