import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Flex,
  Center,
  Icon,
  Box,
  Heading,
} from '@chakra-ui/react';
import { CheckIcon, WarningIcon } from '@chakra-ui/icons';
import { IoIosPeople } from 'react-icons/io';
import { TfiMoney } from 'react-icons/tfi';
import { formatNumToDollar } from '@/lib/utils/formatter';
import { IOrderItem } from '@/interface/main';
import useQueryString from '@/lib/hooks/useQueryString';
import useOrderQuery from '@/lib/hooks/useOrderQuery';

const StatsArea = () => {
  const { getParams } = useQueryString();
  const [orderResult] = useOrderQuery(
    getParams('page'),
    getParams('date'),
    getParams('customer'),
    getParams('filter'),
    getParams('sort'),
  );

  const stats = [
    {
      label: 'Total Order',
      'data-testid': 'total-order',
      stat: orderResult.data.orderInfo.totalCount || 0,
      icon: IoIosPeople,
      iconColor: 'blue.900',
      helpText: `${orderResult.data.orderInfo.startDate} - ${orderResult.data.orderInfo.endDate}`,
    },
    {
      label: 'Total Currency',
      'data-testid': 'total-currency',
      stat: formatNumToDollar(orderResult.data.orderInfo.totalCurrency || 0),
      icon: TfiMoney,
      iconColor: 'blue.900',
      helpText: `${orderResult.data.orderInfo.startDate} - ${orderResult.data.orderInfo.endDate}`,
    },
    {
      label: 'Complete',
      'data-testid': 'complete',
      stat:
        orderResult.data.order.filter((item: IOrderItem) => item.status)
          .length || 0,
      icon: CheckIcon,
      iconColor: 'green.500',
      helpText: `of ${orderResult.data.order.length || 0}`,
    },
    {
      label: 'Incomplete',
      'data-testid': 'incomplete',
      stat:
        orderResult.data.order.filter((item: IOrderItem) => !item.status)
          .length || 0,
      icon: WarningIcon,
      iconColor: 'orange.500',
      helpText: `of ${orderResult.data.order.length || 0}`,
    },
  ];
  return (
    <Box bg="white" w="100%" borderRadius="md" boxShadow="lg">
      <Box p="1em 2em">
        <Heading size="md">Overview</Heading>
      </Box>
      <StatGroup p="1.5em 1em">
        {stats.map((stat) => (
          <Box key={stat.label} data-testid={stat['data-testid']}>
            <Flex alignItems="ceter" justifyContent="center" gap={4}>
              <Center>
                <Icon
                  as={stat.icon}
                  w={8}
                  h={8}
                  color={stat.iconColor}
                  alignContent="center"
                />
              </Center>
              <Stat>
                <StatLabel>{stat.label}</StatLabel>
                <StatNumber>{stat.stat}</StatNumber>
                <StatHelpText>{stat.helpText}</StatHelpText>
              </Stat>
            </Flex>
          </Box>
        ))}
      </StatGroup>
    </Box>
  );
};

export default StatsArea;
