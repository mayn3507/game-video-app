import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack  px="6">
        <Image borderRadius={16} src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar