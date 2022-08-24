import {
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  POST_MESSAGE_FAILURE,
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS
} from "./actions";

const initialState = {
  messages: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return {...state, loading: true, error: null};
    case GET_MESSAGES_SUCCESS:
      return {...state, loading: false, messages: action.payload};
    case GET_MESSAGES_FAILURE:
      return {...state, loading: false, error: action.payload};

    case POST_MESSAGE_REQUEST:
      return {...state, loading: true, error: null};
    case POST_MESSAGE_SUCCESS:
      return {...state, loading: false};
    case POST_MESSAGE_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

export default reducer;