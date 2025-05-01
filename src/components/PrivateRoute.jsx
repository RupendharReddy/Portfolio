import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import verifyToken from '../utils/verifyToken';

const PrivateRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null); // null = loading

  useEffect(() => {
    const check = async () => {
      const isValidToken = await verifyToken();
      setIsValid(isValidToken);
    };
    check();
  }, []);

  if (isValid === null) return <div>Loading...</div>;

  return isValid ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
