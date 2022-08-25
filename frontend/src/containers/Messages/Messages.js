import React, {useEffect} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMessages, onActionModal, postMessage} from "../../store/actions";
import Message from "../../components/Message/Message";
import InputForm from "../../components/InputForm/InputForm";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

const Messages = () => {
 const dispatch = useDispatch();
 const messages = useSelector(state => state.messages);
 const show = useSelector(state => state.show);
 const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const onPostMessage = async formData => {
    await dispatch(postMessage(formData));
    dispatch(getMessages());
  };

  const openModal = () => {
    dispatch(onActionModal(!show));
  };

  return (
    <Container>
      <Typography variant="h3" textAlign="center" color="#9c27b0">
        Anonymous
      </Typography>
      <Box maxWidth="744px" margin="30px auto 0">
        <Button
          variant="contained"
          color="secondary"
          onClick={openModal}
          sx={{margin: "20px 10px 0 auto", display: "block"}}>
          Add new message
        </Button>
      </Box>
      {loading ? <Spinner/> : (
        <Box
          maxWidth="744px" height="720px"
          margin="20px auto 0" padding="15px"
          border="3px solid #9c27b0"
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
      )
      }
      <Modal show={show}>
        {show &&
          <InputForm onPostMessage={onPostMessage} onOpenModal={openModal}/>
        }
      </Modal>
    </Container>
  );
};

export default Messages;