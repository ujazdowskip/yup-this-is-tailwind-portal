import React from "react";
import { Button } from "../button.jsx";

export const Card = ({ name, description, phone, www }) => (
  <div className="p-4 m-2 border rounded w-64 shadow">
    <img
      src="https://picsum.photos/80/80"
      className="rounded-full m-auto mb-4"
    />
    <h2 className="text-xl font-bold text-center">{name}</h2>
    <div className="text-center text-gray-500 text-sm mb-4">
      This is some subheader
    </div>

    <p className="text-sm mb-4">{description}</p>

    <ul className="text-xs mb-4">
      <li>
        www:{" "}
        <a className="link" href={www}>
          {www}
        </a>
      </li>
      <li>
        Tel:{" "}
        <a href={`tel:{phone}`} className="link">
          {phone}
        </a>
      </li>
    </ul>

    <Button className="w-full">Action</Button>
  </div>
);
