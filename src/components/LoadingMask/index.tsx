import React from "react";
import "./index.scss";
import { Spinner } from "components/Spinner";

const LoadingMask: React.FC = () => {
  return (
    <div className="loading-mask-component">
      <Spinner />
    </div>
  );
};

export { LoadingMask };
