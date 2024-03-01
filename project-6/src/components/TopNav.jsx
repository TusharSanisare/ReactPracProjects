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
import { GrMenu } from "react-icons/gr";

import { FaRegCircleUser } from "react-icons/fa6";

const TopNav = ({ title, onOpen }) => {
  return (
    <>
      <HStack
        boxShadow="xl"
        h="60px"
        px="30px"
        py="20px"
        justify="space-between"
      >
        <Icon
          as={GrMenu}
          cursor="pointer"
          fontSize="30px"
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="20px">{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaRegCircleUser} fontSize="30px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
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
