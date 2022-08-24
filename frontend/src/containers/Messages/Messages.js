import React, {useEffect} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../store/actions";
import Message from "../../components/Message/Message";

const Messages = () => {
 const dispatch = useDispatch();
 const messages = useSelector(state => state.messages);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Anonymous
      </Typography>
      <Box
        maxWidth="720px" height="520px"
        margin="50px auto 0" padding="15px"
        border="7px ridge white"
      >
        {messages.length !== 0
          ? messages.map(message => (
            <Message key={message.id} message={message}/>
          )) :
          <Typography variant="h2" textAlign="center" marginTop="50px" fontWeight="500">
            No messages!
          </Typography>
        }
      </Box>
    </Container>
  );
};

export default Messages;