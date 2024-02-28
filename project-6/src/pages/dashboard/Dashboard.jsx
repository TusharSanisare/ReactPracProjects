import React from "react";
import Sidenav from "../../components/Sidenav";
import TopNav from "../../components/TopNav";
import { Box, Flex } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Flex>
        <Sidenav />
        <Box flexGrow="1">
          <TopNav />
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;
