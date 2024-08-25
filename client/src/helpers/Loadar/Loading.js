import React from 'react';
import '../Loadar/loading.css'; 

const Loading = () => {
  return (
    <div className="mainLoader">

    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
    </div>
  );
};

export default Loading;
