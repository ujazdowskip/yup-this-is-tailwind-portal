import React from "react";
import logo from "./images/logo.svg";

import { Button, BUTTON_TYPES } from "./components/button.jsx";

const NavLink = ({ children }) => (
  <a className="cursor-pointer hover:text-green-500">{children}</a>
);

export const MainHeader = () => (
  <header className="flex justify-between p-2 bg-gray-200 mb-6">
    <div className="flex items-center">
      <img src={logo} className="mr-4" style={{ height: "30px" }} />
      <nav className="flex tracking-wide">
        <ul className="flex">
          <li className="mr-4 text-lg">
            <NavLink>Home</NavLink>
          </li>
          <li className="mr-4 text-lg">
            <NavLink>About</NavLink>
          </li>
          <li className="text-lg">
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="flex items-center">
      <img
        src="https://picsum.photos/id/237/30/30"
        className="rounded-full mr-4"
      />
      <Button type={BUTTON_TYPES.SECONDARY}>Log out</Button>
    </div>
  </header>
);
