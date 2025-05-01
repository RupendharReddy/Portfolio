// src/store/reducers/contactReducer.js
const initialState = {
    messages: [],
    status: 'idle',
    error: null,
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MESSAGES_SUCCESS':
        return { ...state, messages: action.payload, status: 'succeeded' };
      case 'FETCH_MESSAGES_FAILURE':
        return { ...state, error: action.error, status: 'failed' };
      case 'SEND_REPLY_SUCCESS':
        return {
          ...state,
          messages: state.messages.map((msg) =>
            msg._id === action.payload._id ? action.payload : msg
          ),
        };
      case 'SEND_REPLY_FAILURE':
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  