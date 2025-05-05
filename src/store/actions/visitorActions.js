// src/store/actions/visitorActions.js
import axios from 'axios';

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
export const fetchVisitorStats = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_VISITOR_STATS_REQUEST' });
    console.log("fetching visitor stats", localStorage.getItem('token'));
    // const { data } = await axios.get('http://localhost:5000/api/visitor',{
    const { data } = await axios.get('https://portfolio-backend-gmwu.onrender.com/api/visitor',{
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
