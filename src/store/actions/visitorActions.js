// src/store/actions/visitorActions.js
import axios from 'axios';
const API_URL = import.meta.env.VITE_BASE_URL;
// const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
// const API_URL = "http://localhost:5000";

// Action to fetch visitor statistics
// export const fetchVisitorStats = () => async (dispatch) => {
//   try {
//     const response = await axios.get('', {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     dispatch({ type: 'FETCH_VISITOR_STATS_SUCCESS', payload: response.data });
//   } catch (error) {
//     dispatch({ type: 'FETCH_VISITOR_STATS_FAILURE', error: error.message });
//   }
// };
// src/api/visitorApi.js

export const trackVisitor = async () => {
  try {
    const response = await fetch(API_URL +`/api/visitor`, {
      method: 'POST',
    });

    const data = await response.json();
    console.log('Visitor tracked:', data);
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};

export const fetchVisitorStats = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_VISITOR_STATS_REQUEST' });
    console.log("fetching visitor stats", localStorage.getItem('token'));
    // const { data } = await axios.get('http://localhost:5000/api/visitor',{
    const { data } = await axios.get(API_URL +'/api/visitor',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    // console.log('visitors data ---', JSON.stringify(data, null, 2));
    
    // Process raw visitor timestamps
    const dayCount = {};

    data.forEach((item) => {
      const date = new Date(item.timestamp).toISOString().split('T')[0];
      dayCount[date] = (dayCount[date] || 0) + 1;
    });

    const dayWise = Object.keys(dayCount).map(date => ({
      date,
      visitors: dayCount[date]
    }));

    dispatch({
      type: 'FETCH_VISITOR_STATS_SUCCESS',
      payload: {
        total: data.length,
        dayWise,
        totalVisitorsOverTime: dayWise,
      },
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_VISITOR_STATS_FAILURE',
      payload: error.message,
    });
  }
};
