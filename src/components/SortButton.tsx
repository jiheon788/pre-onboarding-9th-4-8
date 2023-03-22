import { Button } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import useQueryString from '@/lib/hooks/useQueryString';
import { ISortButtonProps, sortTargetType } from '@/interface/main';

const SortButton = ({ sortTarget }: ISortButtonProps) => {
  const { getParams, setParams, deleteParams } = useQueryString();

  const onClickSort = (target: sortTargetType) => {
    deleteParams('page');

    if (!getParams('sort')) {
      setParams('sort', `${target}-descending`);
      return;
    }

    const currentSortOrder = getParams('sort').split('-')[1];
    setParams(
      'sort',
      `${target}-${
        currentSortOrder === 'descending' ? 'ascending' : 'descending'
      }`,
    );
  };

  return (
    <Button
      background="none"
      _hover={{ background: 'gray.100' }}
      p={0}
      onClick={() => onClickSort(sortTarget)}
      data-testid={`${sortTarget}-sort`}
    >
      <ArrowUpIcon
        color={
          getParams('sort') === `${sortTarget}-ascending`
            ? 'blue.500'
            : 'gray.400'
        }
      />
      <ArrowDownIcon
        color={
          getParams('sort') === `${sortTarget}-descending`
            ? 'blue.500'
            : 'gray.400'
        }
      />
    </Button>
  );
};

export default SortButton;
