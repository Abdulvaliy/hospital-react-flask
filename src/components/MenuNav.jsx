import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Flex,
  Text,
  Badge,
} from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function MenuNav() {
  return (
    <Container  maxW={"xxl"} mt={3}>
      <Menu>
        <Flex>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />

          <Badge
          ml={3}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            colorScheme='purple'
          >
            Xmed
          </Badge>
          {/* <Badge >New</Badge> */}

        </Flex>
        <MenuList>
          <MenuItem command="⌘T">New Tab</MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
}

export default MenuNav;
