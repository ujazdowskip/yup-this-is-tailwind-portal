import React from "react";
import classNames from "classnames";

export const IconButton = ({ children, className, onClick }) => (
  <i
    role="button"
    className={classNames(
      "material-icons cursor-pointer  text-gray-800 hover:text-gray-600",
      "transition-colors ease-in-out duration-150",
      className
    )}
    onClick={onClick}
  >
    {children}
  </i>
);
