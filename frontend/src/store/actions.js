import axios from "axios";
import {apiUrl} from "../config";

export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';

export const POST_MESSAGE_REQUEST = 'POST_MESSAGE_REQUEST';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';

const getMessagesRequest = () => ({type: GET_MESSAGES_REQUEST});
const getMessagesSuccess = messages => ({type: GET_MESSAGES_SUCCESS, payload: messages});
const getMessagesFailure = error => ({type: GET_MESSAGES_FAILURE, payload: error});

const postMessageRequest = () => ({type: POST_MESSAGE_REQUEST});
const postMessageSuccess = () => ({type: POST_MESSAGE_SUCCESS});
const postMessageFailure = error => ({type: POST_MESSAGE_FAILURE, payload: error});

export const getMessages = () => {
  return async dispatch => {
    try {
      dispatch(getMessagesRequest());
      const {data} = await axios(apiUrl + '/messages');

      dispatch(getMessagesSuccess(data));
    } catch (e) {
      dispatch(getMessagesFailure(e.message));
    }
  };
};

export const postMessage = data => {
  return async dispatch => {
    try {
      dispatch(postMessageRequest());
      await axios.post(apiUrl, data);

      dispatch(postMessageSuccess());
    } catch (e) {
      dispatch(postMessageFailure(e.message));
    }
  };
};