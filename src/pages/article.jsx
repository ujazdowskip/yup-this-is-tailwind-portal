import React from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import store from "../store";
import { Bookmark } from "../components/bookmark.jsx";
import { IconButton } from "../components/icon-button.jsx";
import { Button, BUTTON_SIZES, BUTTON_TYPES } from "../components/button.jsx";

const Actions = ({ author, date, className }) => (
  <div className={classNames("flex items-center", className)}>
    <img
      src={`https://picsum.photos/id/123/50/50`}
      className="rounded-full mr-4 w-12"
    />
    <div className="text-sm flex-1">
      <div>
        <span>{author}</span>
        <Button
          className="ml-2"
          size={BUTTON_SIZES.XS}
          type={BUTTON_TYPES.SECONDARY}
        >
          Follow
        </Button>
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
);

const Tags = ({ tags, className }) => (
  <ul className={classNames("flex", className)}>
    {tags.map((tag, i) => (
      <li
        key={`tag-${i}`}
        className="text-sm bg-gray-200 text-gray-800 px-3 py-1 mr-3 last:mr-0 rounded"
      >
        {tag}
      </li>
    ))}
  </ul>
);

const AuthorFooter = ({ author, className }) => (
  <div
    className={classNames(
      "border-t border-b py-8 flex items-center",
      className
    )}
  >
    <img
      src={`https://picsum.photos/id/123/60/60`}
      className="rounded-full mr-4"
    />
    <div className="flex-1">
      <div className="text-sm uppercase text-subheader">Written by</div>
      <div className="text-xl mb-1">{author}</div>
      <div className="text-subheader text-sm">Fullstack Software Engineer</div>
    </div>
    <Button size={BUTTON_SIZES.LG}>Follow</Button>
  </div>
);

export const Article = () => {
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
    <article className="container-article m-auto text-lg mt-16">
      <h2 className="text-4xl mb-2 font-serif leading-tight">{title}</h2>
      <div className="text-subheader text-lg mb-8">{summary}</div>
      <Actions author={author} date={date} className="mb-10" />
      <div className="mb-10">
        <img
          className="m-auto"
          src={`https://picsum.photos/id/${imageId}/680/450`}
        />
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
      <Tags tags={tags} className="mb-10" />
      <AuthorFooter author={author} className="mb-16" />
    </article>
  );
};
