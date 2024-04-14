import React from "react";

const Loading = ({isLoading}) => {
  return (
    <div id="loading" className={`${isLoading ? "show" : ""}`}>
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon"></div>
      </div>
    </div>
  );
};

export default Loading;
