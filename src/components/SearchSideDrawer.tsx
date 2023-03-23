import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  ListItem,
  UnorderedList,
  Highlight,
} from '@chakra-ui/react';
import useQueryString from '@/lib/hooks/useQueryString';
import useOrderQuery from '@/lib/hooks/useOrderQuery';
import useInput from '@/lib/hooks/useInput';
import { formatPureString } from '@/lib/utils/formatter';

export interface ISearchSideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

const SearchSideDrawer = ({
  isOpen,
  onClose,
  btnRef,
}: ISearchSideDrawerProps) => {
  const [searchName, onChangeSearchName, setSearchName] = useInput('');
  const { getParams, setParams, deleteAllParams } = useQueryString();
  const [_, customersResult] = useOrderQuery(
    getParams('page'),
    getParams('date'),
    getParams('customer'),
    getParams('filter'),
    getParams('sort'),
  );

  const filterdCustomers = customersResult.data.filter((customer: string) =>
    formatPureString(customer).includes(formatPureString(searchName)),
  );

  const onSearch = (name: string) => {
    deleteAllParams();
    setParams('customer', name);
    setSearchName('');
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      useInert={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>고객 이름으로 검색하기</DrawerHeader>

        <DrawerBody>
          <Input
            data-testid="search-input"
            type="text"
            aria-hidden={true}
            placeholder="Customer name"
            value={searchName}
            onChange={onChangeSearchName}
          />

          <UnorderedList>
            {searchName &&
              filterdCustomers.map((customer: string) => (
                <ListItem
                  key={customer}
                  aria-hidden={true}
                  cursor="pointer"
                  p="0.2em 0"
                  onClick={() => onSearch(customer)}
                >
                  <Highlight
                    query={searchName}
                    styles={{
                      bg: 'blue.50',
                    }}
                  >
                    {customer}
                  </Highlight>
                </ListItem>
              ))}
          </UnorderedList>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchSideDrawer;
