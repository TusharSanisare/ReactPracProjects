import { Box, HStack, Icon, Stack, Text, Heading } from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: MdSpaceDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: FaArrowRightArrowLeft,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      boxShadow="2xl"
      w="280px"
      h="100vh"
      display={{
        base: "none",
        lg: "flex",
      }}
    >
      <Heading as="h1" mx="auto" my="5">
        Free Time Pass
      </Heading>
      {navLinks.map((nav) => (
        <HStack
          key={nav.text}
          fontSize="20px"
          text="center"
          cursor="pointer"
          color="#636262"
          mx="10px"
          borderRadius="5px"
          p="3"
          _hover={{ bg: "#f2edf5", color: "#000000" }}
        >
          <Icon as={nav.icon} />
          <Text>{nav.text}</Text>
        </HStack>
      ))}
      <HStack
        color="#636262"
        fontSize="20px"
        text="center"
        cursor="pointer"
        mt="auto"
        mx="10px"
        mb="10px"
        borderRadius="5px"
        p="3"
        _hover={{ bg: "#f2edf5", color: "#000000" }}
      >
        <Icon as={BiSupport} />
        <Text>Support</Text>
      </HStack>
    </Stack>
  );
};

export default Sidenav;
