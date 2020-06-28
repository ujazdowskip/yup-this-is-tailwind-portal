import React from "react";
import classNames from "classnames";

export const BUTTON_TYPES = {
  MAIN: "main",
  SECONDARY: "secondary",
};

export const BUTTON_SIZES = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
};

export const Button = ({
  children,
  className,
  type = BUTTON_TYPES.MAIN,
  size = BUTTON_SIZES.MD,
}) => (
  <button
    className={classNames(
      "border-0 rounded tracking-wide",
      "transition-colors ease-in-out duration-150",
      "focus:outline-none ",
      {
        "bg-green-500 text-white hover:bg-green-400 focus:shadow-outline":
          type === BUTTON_TYPES.MAIN,
        "border border-gray-800 hover:border-gray-600 text-gray-800 hover:text-gray-600 focus:shadow-outline-secondary":
          type === BUTTON_TYPES.SECONDARY,
        "px-2 text-sm": size === BUTTON_SIZES.XS,
        "py-1 px-3 text-sm": size === BUTTON_SIZES.SM,
        "py-2 px-4 text-sm": size === BUTTON_SIZES.MD,
        "py-2 px-5 text-lg": size === BUTTON_SIZES.LG,
      },
      className
    )}
  >
    {children}
  </button>
);
