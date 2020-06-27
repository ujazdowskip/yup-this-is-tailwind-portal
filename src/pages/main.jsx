import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import store from "../store";
import { Bookmark } from "../components/bookmark.jsx";
import { IconButton } from "../components/icon-button.jsx";

const AuthorAndDuration = ({ author, date, duration }) => (
  <div className="text-xs">
    <div className="hover:text-green-500 cursor-pointer">{author}</div>
    <div className="text-subheader">
      {new Date(date).toLocaleDateString()} · {duration} min read
    </div>
  </div>
);

const ArticleItem = ({
  id,
  title,
  summary,
  author,
  date,
  duration,
  className,
  imageId,
}) => (
  <div className={classNames("flex justify-between items-start", className)}>
    <div className="flex-1">
      <Link to={`/article/${id}`} className="cursor-pointer">
        <div className="font-bold text-2xl font-serif leading-tight mb-3">
          {title}
        </div>
        <div className="text-subheader text-sm mb-3">{summary}</div>
      </Link>
      <div className="flex justify-between items-center">
        <AuthorAndDuration {...{ author, date, duration }} />
        <div>
          <Bookmark />
          <IconButton className="mr-2">more_horiz</IconButton>
        </div>
      </div>
    </div>
    <img className="ml-4" src={`https://picsum.photos/id/${imageId}/120/120`} />
  </div>
);

export const Main = () => (
  <div className="flex container-main m-auto">
    <div className="w-2/3 pr-6">
      {store.articles.map((article) => (
        <ArticleItem
          className="mb-16 last:mb-0"
          key={article.id}
          {...article}
        />
      ))}
    </div>
    <div className="w-1/3 pl-6">
      <div className="bg-gray-200">
        <ul className="p-6">
          {store.articles
            .slice(0, 4)
            .map(({ id, title, authorImageId, author, date, duration }) => (
              <li key={id} className="mb-6 last:mb-0">
                <div className="flex align-top items-start">
                  <img
                    className="rounded-full mr-4 w-10"
                    src={`https://picsum.photos/id/${authorImageId}/40/40`}
                  />
                  <div className="flex flex-col min-w-0">
                    <Link
                      to={`/article/${id}`}
                      className="font-bold truncate mb-1 cursor-pointer"
                    >
                      {title}
                    </Link>
                    <AuthorAndDuration {...{ author, date, duration }} />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
);
