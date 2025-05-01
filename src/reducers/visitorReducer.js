// src/store/reducers/visitorReducer.js
const initialState = {
    stats: {},
    status: 'idle',
    error: null,
  };
  
  const visitorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_VISITOR_STATS_SUCCESS':
        return { ...state, stats: action.payload, status: 'succeeded' };
      case 'FETCH_VISITOR_STATS_FAILURE':
        return { ...state, error: action.error, status: 'failed' };
      default:
        return state;
    }
  };
  
  export default visitorReducer;
  