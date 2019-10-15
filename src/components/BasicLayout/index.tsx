import React, { useEffect, useState, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import { LoadingMask } from "components/LoadingMask";
import "./index.scss";

const useLayoutFade = () => {
  const [inProp, setInProp] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setInProp(false);
    }, 1000);
  }, [setInProp]);
  return [inProp];
};

const BasicLayout: React.FC = ({ children }) => {
  const [inProp] = useLayoutFade();
  return (
    <Fragment>
      <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={500}
        classNames="global-animation-fade"
      >
        <LoadingMask />
      </CSSTransition>
      <div className="basic-layout-component">{children}</div>
    </Fragment>
  );
};

export { BasicLayout };
