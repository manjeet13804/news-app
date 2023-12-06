import React from "react";

const BasicButton = ({ title, handleAction }) => {
  return (
    <button type="button" className="btn btn-primary"  onClick={handleAction}>
      {title}
    </button>
  );
};
const BasicFormButton = ({ title, handleAction }) => {
  return (
    <button type="button" className="" style ={{width : "300px", height:"40px",color:"white",background:"blue",borderRadius:"10px"}} onClick={handleAction}>
      {title}
    </button>
  );
};
const RouteButton = ({ title, handleNavigate }) => {
  return (
    <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleNavigate}>
      {title}
    </button>
  );
};

export { BasicButton, RouteButton,BasicFormButton };
