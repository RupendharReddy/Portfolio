// const initialState = {
//     isAuthenticated: false,
//     user: null,
//     token: null,
//     loading: false,
//     error: null,
//   };
  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'LOGIN_REQUEST':
//         return { ...state, loading: true };
//       case 'LOGIN_SUCCESS':
//         return {
//           ...state,
//           loading: false,
//           isAuthenticated: true,
//           token: action.payload.token,
//           user: action.payload.user,
//         };
//       case 'LOGIN_FAIL':
//         return { ...state, loading: false, error: action.payload };
//       case 'LOGOUT':
//         return initialState;
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
  // src/store/reducers/authReducer.js
  const initialState = {
    isAuthenticated: false,
    token: null,
    name: '',
    email: '',
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, error: null };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token,
          name: action.payload.name,
          email: action.payload.email,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return { ...state, isAuthenticated: false, error: action.payload };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  