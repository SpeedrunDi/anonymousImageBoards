import React, {useEffect} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMessages, postMessage} from "../../store/actions";
import Message from "../../components/Message/Message";
import InputForm from "../../components/InputForm/InputForm";

const Messages = () => {
 const dispatch = useDispatch();
 const messages = useSelector(state => state.messages);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const onPostMessage = async formData => {
    await dispatch(postMessage(formData));
    dispatch(getMessages());
  };

  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Anonymous
      </Typography>
      <Box
        maxWidth="744px" height="520px"
        margin="50px auto 0" padding="15px"
        border="3px solid gray"
        sx={{overflowY: "scroll"}}
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
      <InputForm onPostMessage={onPostMessage}/>
    </Container>
  );
};

export default Messages;