import React, { useState } from "react";
import classNames from "classnames";

export const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <i
      className={classNames(
        "material-icons cursor-pointer text-gray-500 hover:text-black",
        {
          "text-green-500 hover:text-green-300": bookmarked,
        }
      )}
      onClick={() => setBookmarked(!bookmarked)}
    >
      {bookmarked ? "bookmark" : "bookmark_border"}
    </i>
  );
};
