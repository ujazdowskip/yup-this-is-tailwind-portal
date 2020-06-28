import React from "react";
import { useState } from "react";
import { usePopper } from "react-popper";

export const useTooltip = (content) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [visible, setIsVisible] = useState(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowElement },
      },
    ],
  });

  const tooltip = visible && (
    <div
      className="tooltip border bg-white rounded-md shadow-sm"
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
    >
      {content}
      <div className="arrow" ref={setArrowElement} style={styles.arrow} />
    </div>
  );

  return [setReferenceElement, setIsVisible, tooltip];
};
