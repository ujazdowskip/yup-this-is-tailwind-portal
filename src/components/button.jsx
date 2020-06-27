import React from "react";
import classNames from "classnames";

export const BUTTON_TYPES = {
  MAIN: "main",
  SECONDARY: "secondary",
};

export const Button = ({ children, className, type = BUTTON_TYPES.MAIN }) => (
  <button
    className={classNames(
      "border-0 rounded py-2 px-4 transition-colors ease-in-out duration-150 focus:outline-none focus:shadow-outline",
      {
        "bg-green-500 text-white hover:bg-green-400":
          type === BUTTON_TYPES.MAIN,
        "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white":
          type === BUTTON_TYPES.SECONDARY,
      },
      className
    )}
  >
    {children}
  </button>
);
