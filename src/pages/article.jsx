import React from "react";
import { useParams } from "react-router-dom";
import store from "../store";

import { Bookmark } from "../components/bookmark.jsx";
import { IconButton } from "../components/icon-button.jsx";
import { Button } from "../components/button.jsx";

export const Article = (props) => {
  const { articleId } = useParams();
  const {
    content,
    title,
    summary,
    author,
    date,
    imageId,
    tags,
  } = store.articles.find(({ id }) => id === articleId);

  return (
    <article className="container-article m-auto text-xl">
      <h2 className="text-4xl mb-2 font-serif">{title}</h2>
      <div className="text-subheader text-lg mb-8">{summary}</div>
      <div className="flex mb-10">
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
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
        <div className="flex items-end">
          <IconButton className="mr-2">whatshot</IconButton>
          <IconButton className="mr-2">face</IconButton>
          <IconButton className="mr-2">favorite</IconButton>
          <Bookmark />
        </div>
      </div>
      <div className="mb-10">
        <img src={`https://picsum.photos/id/${imageId}/680/450`} />
        <p className="text-sm text-center mt-2 text-subheader">
          Photo from{" "}
          <a className="underline" href="https://picsum.photos/">
            Lorem Picsum
          </a>
        </p>
      </div>
      {content.map((paragraph, i) => (
        <p className="mb-10 font-serif" key={`par-${i}`}>
          {paragraph}
        </p>
      ))}
      <ul className="flex mb-10">
        {tags.map((tag, i) => (
          <li
            key={`tag-${i}`}
            className="text-sm bg-gray-200 text-gray-800 px-3 py-1 mr-3 last:mr-0 rounded"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="border-t border-b py-8 flex items-center mb-10">
        <img
          src={`https://picsum.photos/id/123/60/60`}
          className="rounded-full mr-4"
        />
        <div className="flex-1">
          <div className="text-sm uppercase text-subheader">Written by</div>
          <div className="text-xl mb-1">{author}</div>
          <div className="text-subheader text-sm">
            Fullstack Software Engineer
          </div>
        </div>
        <Button>Follow</Button>
      </div>
    </article>
  );
};
