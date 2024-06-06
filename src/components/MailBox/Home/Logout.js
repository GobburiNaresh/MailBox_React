import React from 'react';

const Logout = ({ onClick }) => {
  return (
    <strong onClick={onClick} style={{ cursor: 'pointer' }}>Logout</strong>
  );
};

export default Logout;
