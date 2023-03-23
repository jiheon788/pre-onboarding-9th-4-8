import { useQueries } from '@tanstack/react-query';
import { getCustomers, getOrderData } from '@/api/order';

const useOrderQuery = (
  page: string,
  date: string,
  customer: string,
  filter: string,
  sort: string,
) => {
  return useQueries({
    queries: [
      {
        queryKey: ['/mock/order', page, date, customer, filter, sort],
        queryFn: () =>
          getOrderData(Number(page) - 1, date, customer, filter, sort).then(
            (res) => res.data,
          ),
        retry: 3,
        refetchInterval: 5000,
        staleTime: 5000,
      },
      {
        queryKey: ['/mock/customers'],
        queryFn: () => getCustomers().then((res) => res.data.customers),
        staleTime: Infinity,
      },
    ],
  });
};

export default useOrderQuery;
