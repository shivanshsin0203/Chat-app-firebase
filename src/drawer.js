import React from 'react';
import {
  ChakraProvider,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  RadioGroup,
  Radio,
  Stack,
  useDisclosure,
  extendTheme,
} from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react"
import { AvatarBadge,HStack,Avatar,Text, VStack } from "@chakra-ui/react";
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

function PlacementExample(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');
   console.log(props.data)
  return (
    <>
       
        <Button color="green"colorScheme='cyan' onClick={onOpen} w={"50%"}>
        {props.number} Online
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"black"} w={"md"}>
          <DrawerHeader borderBottomWidth='1px' color={"white"}>Online Members</DrawerHeader>
          <DrawerBody color={"white"}>
              <VStack>
                {
                  props.data.map(item=>(
                    <HStack>
                       <Avatar src={item.uri} size="sm">
                       <AvatarBadge boxSize='1.25em' bg='green.500' />
                      </Avatar>
                      <p>{item.unme}</p>
                    </HStack>
                  ))
                }
              </VStack>
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function App(props) {
    return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <PlacementExample data={props.data} number={props.number} />
    </ChakraProvider>
  );
}

export default App;
