import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import TopNav from "./TopNav";
import Sidenav from "./Sidenav";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Flex>
        <Sidenav />
        <SideDrawer
          isOpen={isOpen}
          onClose={onClose}
          Display={{
            base: "block",
            lg: "none",
          }}
        />
        <Box flexGrow="1">
          <TopNav title={title} onOpen={onOpen} />
          <Container bg="red" p="5px">
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
