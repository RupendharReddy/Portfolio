// src/store/actions/contactActions.js
import axios from 'axios';

// Action to fetch contact messages
export const fetchMessages = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/contact', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTBl
        // NmFlMjcxYzlhMzdmYWMxMjcyMyIsImlhdCI6MTc0NjAxMjgzNiwiZXhwIjoxNzQ2MDE2NDM2fQ
        // .-vz4HWrlrbSoZz0ZGnc9CYRNZ1GxWADWhErlrWp9ApE`,
      },
    });
    console.log('response', response);
    console.log('response', JSON.stringify(response.data, null, 2));
    
    dispatch({ type: 'FETCH_MESSAGES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MESSAGES_FAILURE', error: error.message });
  }
};

// Action to send a reply to a contact message
export const sendReply = (id, replyText) => async (dispatch) => {
  try {
    const response = await axios.post(
      `/api/contact/reply/${id}`,
      { replyText },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    dispatch({ type: 'SEND_REPLY_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'SEND_REPLY_FAILURE', error: error.message });
  }
};
