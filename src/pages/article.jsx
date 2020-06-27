import React from "react";
import { useParams } from "react-router-dom";
import store from "../store";

import { Bookmark } from "../components/bookmark.jsx";
import { IconButton } from "../components/icon-button.jsx";

export const Article = (props) => {
  const { articleId } = useParams();
  const { content, title, summary, author, date } = store.articles.find(
    ({ id }) => id === articleId
  );

  return (
    <article className="container-article m-auto text-xl">
      <h2 className="text-4xl mb-2 font-serif">{title}</h2>
      <div className="text-subheader text-lg mb-8">{summary}</div>
      <div className="flex mb-8">
        <img
          src={`https://picsum.photos/id/123/40/40`}
          className="rounded-full mr-4"
        />
        <div className="text-sm flex-1">
          <div>
            <span>{author}</span>
            <span className="ml-2 border border-gray-600 text-gray-600 rounded px-2 cursor-pointer hover:text-gray-800 hover:border-gray-800">
              Follow
            </span>
          </div>
          <div className="text-subheader">
            {new Date().toLocaleDateString()}
          </div>
        </div>
        <div className="flex items-end">
          <IconButton className="mr-2">whatshot</IconButton>
          <IconButton className="mr-2">face</IconButton>
          <IconButton className="mr-2">favorite</IconButton>
          <Bookmark />
        </div>
      </div>
      {content.map((paragraph, i) => (
        <p className="mb-8 font-serif" key={`par-${i}`}>
          {paragraph}
        </p>
      ))}
    </article>
  );
};
