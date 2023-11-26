import React from "react";
import { HStack,Avatar,Text, VStack } from "@chakra-ui/react";
function Message(props){
    return <HStack border="1px solid" borderColor="" spacing={4}bg="black" alignSelf={props.user==="me"?"flex-end":"flex-start"} borderRadius={"base"}  paddingY={"2"} paddingX={props.user==="me"?"4":"2"}>
          <VStack >
          <Text color="white"fontSize="11px">{props.name}</Text>
          <Text color="white"fontSize={"xl"}>{props.text}</Text>
          </VStack>
           <Avatar src={props.uri} size="sm" ></Avatar>
        
    </HStack>
}
export default Message;