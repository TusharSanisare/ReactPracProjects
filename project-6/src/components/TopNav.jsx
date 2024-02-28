import {
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
  Button,
  HStack,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { FaRegCircleUser } from "react-icons/fa6";

const TopNav = () => {
  return (
    <>
      <HStack
        boxShadow="xl"
        h="60px"
        px="30px"
        py="20px"
        justify="space-between"
      >
        <Heading fontSize="20px">Dashboard</Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaRegCircleUser} fontSize="30px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </>
  );
};

export default TopNav;
