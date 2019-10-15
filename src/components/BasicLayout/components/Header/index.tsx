import React from "react";
import "./index.scss";
import { CONSTANT_HEADER_TEXT } from "constants/global";

const Header: React.FC = () => {
  return (
    <h1 className="header-component css1c75233cf11a2f7">
      {CONSTANT_HEADER_TEXT}
    </h1>
  );
};

export { Header };
