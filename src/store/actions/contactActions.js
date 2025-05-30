// src/store/actions/contactActions.js
import axios from 'axios';
const API_URL = import.meta.env.VITE_BASE_URL;
// const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
// const API_URL = "http://localhost:5000";


// Action to fetch contact messages
export const fetchMessages = () => async (dispatch) => {
  try {
    // const response = await axios.get('http://localhost:5000/api/contact', {
    const response = await axios.get( API_URL +'/api/contact', {
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

export const sendReply = (messageId, replyText) => async (dispatch) => {
  try {
    dispatch({ type: 'SEND_REPLY_REQUEST' });

    // const response = await axios.post(`http://localhost:5000/api/contact/reply/${messageId}`, { replyText }, {
    const response = await axios.post(API_URL+`/api/contact/reply/${messageId}`, { replyText }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    dispatch({ type: 'SEND_REPLY_SUCCESS', payload: response.data });
    return response.data; // return the updated message
  } catch (error) {
    dispatch({
      type: 'SEND_REPLY_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    throw error; // re-throw so the component can handle it
  }
};
// export const submitContactForm = (formData) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/contact/', formData, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     dispatch({ type: 'SUBMIT_CONTACT_FORM_SUCCESS', payload: response.data });
//   } catch (error) {
//     dispatch({ type: 'SUBMIT_CONTACT_FORM_FAILURE', error: error.message });
//   }
// };
// export const submitContactForm = (formData) => async (dispatch) => {
//   try {
//     dispatch({ type: 'CONTACT_FORM_SUBMIT_REQUEST' });

//     const response = await axios.post('http://localhost:5000/api/contact', formData);

//     dispatch({
//       type: 'CONTACT_FORM_SUBMIT_SUCCESS',
//       payload: response.data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'CONTACT_FORM_SUBMIT_FAIL',
//       payload: error.response?.data?.message || error.message,
//     });
//   }
// };
export const submitContactForm = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'CONTACT_FORM_SUBMIT_REQUEST' });

    // const response = await axios.post('http://localhost:5000/api/contact', formData);
    const response = await axios.post(API_URL +'/api/contact', formData);
    console.log('response', response);
    
    dispatch({
      type: 'CONTACT_FORM_SUBMIT_SUCCESS',
      payload: response.data.message,
    });

    return { success: true, message: response.data.message }; // ✅ return for component use
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    console.log('error', errorMsg);
    
    dispatch({
      type: 'CONTACT_FORM_SUBMIT_FAIL',
      payload: errorMsg,
    });

    return { success: false, message: errorMsg }; // ✅ return for component use
  }
};

export const markAsSeen = (messageId) => async (dispatch) => {
  try {
    // await axios.put(`http://localhost:5000/api/contact/${messageId}/seen`, null, {
    await axios.put(API_URL +`/api/contact/${messageId}/seen`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch(fetchMessages()); // Refresh message list
  } catch (error) {
    console.error("Error marking message as seen:", error);
  }
};