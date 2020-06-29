import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, BUTTON_TYPES } from "./button.jsx";
import { useTooltip } from "../hooks/useTooltip.js";
import { useOutsideClick } from "../hooks/useOutsideClick.js";

const SettingItem = ({ label }) => (
  <li className="px-4 py-1 hover:text-gray-500">{label}</li>
);

const sections = [
  ["New story", "Stories", "Series", "Stats"],
  ["Portal partnel program"],
  ["Reading list", "Publications"],
];

const Settings = () => (
  <ul>
    <li className="border-b p-6">
      <div className="flex items-center">
        <img
          src="https://picsum.photos/id/237/50/50"
          className="rounded-full mr-4"
        />
        <div className="mr-6">
          <div className="font-bold">John Doe</div>
          <div className="text-subheader">@johndoe</div>
        </div>
      </div>
    </li>
    {sections.map((section, i) => (
      <li
        key={`section-${i}`}
        className="border-b last:border-0 text-subheader py-2"
      >
        <ul>
          {section.map((label, j) => (
            <SettingItem key={`item-${j}`} label={label} />
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

const UserAvatar = () => {
  const [
    setReferenceElement,
    setIsVisible,
    tooltip,
    referenceElement,
  ] = useTooltip(<Settings />);

  useOutsideClick(
    referenceElement,
    () => setIsVisible(true),
    () => setIsVisible(false)
  );

  return (
    <div className="cursor-pointer mr-2" ref={setReferenceElement}>
      <img src="https://picsum.photos/id/237/35/35" className="rounded-full" />
      {tooltip}
    </div>
  );
};

export const MainHeader = () => (
  <header className="shadow-xl">
    <div className="container-header flex justify-between p-2 mb-6 m-auto">
      <div className="flex items-center">
        <nav className="flex tracking-wide">
          <ul className="flex">
            <li className="mr-4 text-2xl font-bold font-serif">
              <Link className="cursor-pointer" to="/">
                Portal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <UserAvatar />
        <Button type={BUTTON_TYPES.SECONDARY}>Log out</Button>
      </div>
    </div>
  </header>
);
