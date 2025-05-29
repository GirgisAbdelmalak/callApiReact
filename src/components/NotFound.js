import React from 'react';

function NotFound(){
  return (
    <div className="d-flex align-items-center justify-content-center vh-100  text-center">
      <div>
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-3">Oops! Page not found.</p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
