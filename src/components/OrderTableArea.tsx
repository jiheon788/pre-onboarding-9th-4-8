import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  Box,
  Heading,
  Center,
} from '@chakra-ui/react';
import { CheckIcon, WarningIcon } from '@chakra-ui/icons';
import { IOrderItem } from '@/interface/main';
import useQueryString from '@/lib/hooks/useQueryString';
import { formatPageInfo } from '@/lib/utils/formatter';
import useOrderQuery from '@/lib/hooks/useOrderQuery';
import TablePagination from './TablePagination';
import TableController from './TableController';
import SortButton from './SortButton';

const OrderTableArea = () => {
  const { getParams } = useQueryString();
  const [orderResult] = useOrderQuery(
    getParams('page'),
    getParams('date'),
    getParams('customer'),
    getParams('filter'),
    getParams('sort'),
  );

  return (
    <Box bg="white" w="100%" borderRadius="md" boxShadow="lg">
      <Box p="1em 2em">
        <Heading size="md">Order Table</Heading>
      </Box>
      <Box p="1em 2em">
        <TableController />
      </Box>
      <TableContainer p="1em 2em">
        <Table variant="simple">
          <TableCaption>
            {formatPageInfo(
              Number(getParams('page')),
              orderResult.data.order.length || 0,
              orderResult.data.orderInfo.totalCount || 0,
            )}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Status</Th>
              <Th>
                Order ID&nbsp;&nbsp;
                <SortButton sortTarget="id" />
              </Th>
              <Th>Customer Name / ID</Th>
              <Th>
                Time&nbsp;&nbsp;
                <SortButton sortTarget="time" />
              </Th>
              <Th>Currency</Th>
            </Tr>
          </Thead>
          <Tbody data-testid="table-body">
            {orderResult.data.order.map((orderItem: IOrderItem) => {
              return (
                <Tr key={orderItem.id} data-testid="order-tr">
                  <Td data-testid="status">
                    {orderItem.status ? (
                      <Icon as={CheckIcon} w={4} h={4} color="green.500" />
                    ) : (
                      <Icon as={WarningIcon} w={4} h={4} color="orange.500" />
                    )}
                  </Td>
                  <Td data-testid="id">{orderItem.id}</Td>
                  <Td data-testid="customer-name">
                    {orderItem.customer_name} / {orderItem.customer_id}
                  </Td>
                  <Td data-testid="transaction-time">
                    {orderItem.transaction_time}
                  </Td>
                  <Td data-testid="currency">{orderItem.currency}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Center p="1em 2em">
        <TablePagination />
      </Center>
    </Box>
  );
};

export default OrderTableArea;
