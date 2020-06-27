import React from "react";
import classNames from "classnames";

export const IconButton = ({ children, className }) => (
  <i
    className={classNames(
      "material-icons cursor-pointer text-gray-500 hover:text-black",
      className
    )}
  >
    {children}
  </i>
);
