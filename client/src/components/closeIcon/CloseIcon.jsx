import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrossSvg } from "../../assets/cross.svg";

const CloseIcon = () => {
  return (
    <Link to="/">
      <CrossSvg />
    </Link>
  );
};

export default CloseIcon;
