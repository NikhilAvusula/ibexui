import React from 'react';
import "./ErrorHandling.scss";

function AccessDenied() {
  return (

    <div className="access-denied-container">
      <h1>Access Denied</h1>
      <p>You do not have permission to access this page.</p>
    </div>
  );
}

export default AccessDenied;
