import React, {useContext} from 'react';
import { Box } from "@chakra-ui/layout";
// import SingleChat from "./SingleChat";
import ChatContext from '../Context/chat-context.js';

const Chatbox = ({ fetchAgain, setFetchAgain }) => {

  const { selectedChat } = useContext(ChatContext);

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      {/* <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> */}
    </Box>
  );
};

export default Chatbox;
