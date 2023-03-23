import { Outlet } from 'react-router-dom';
import { Container, Flex } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Container maxW="80%" centerContent padding="3em 0">
      <Flex gap={10} flexDirection="column" w="100%">
        <Outlet />
      </Flex>
    </Container>
  );
};

export default Layout;
