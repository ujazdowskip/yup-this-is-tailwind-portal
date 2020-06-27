import React from "react";
import { Link } from "react-router-dom";

import { Button, BUTTON_TYPES } from "./components/button.jsx";

export const MainHeader = () => (
  <header className="shadow-xl">
    <div className="container-header flex justify-between p-2 mb-6 m-auto">
      <div className="flex items-center">
        <nav className="flex tracking-wide">
          <ul className="flex">
            <li className="mr-4 text-2xl font-bold font-serif">
              <Link className="cursor-pointer" to="/">
                Cosmos
              </Link>
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
    </div>
  </header>
);
