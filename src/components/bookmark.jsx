import React, { useState } from "react";
import { IconButton } from "./icon-button.jsx";

export const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <IconButton onClick={() => setBookmarked(!bookmarked)}>
      {bookmarked ? "bookmark" : "bookmark_border"}
    </IconButton>
  );
};
