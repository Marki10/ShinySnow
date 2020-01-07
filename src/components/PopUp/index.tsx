import React from "react";

import "./PopUp.scss";

interface PopUpProps {
  togglePopUp: object;
  children: object;
}

const PopUp = (props: PopUpProps) => {
  return (
    <div className="pop-up-wrapper" onClick={props.togglePopUp}>
      <div
        className="pop-up"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default PopUp;
