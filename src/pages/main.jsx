import React, { useState } from "react";
import classNames from "classnames";

import articles from "../data/articles";

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <i
      className="material-icons cursor-pointer"
      onClick={() => setBookmarked(!bookmarked)}
    >
      {bookmarked ? "bookmark" : "bookmark_border"}
    </i>
  );
};

const AuthorAndDuration = ({ author, date, duration }) => (
  <div className="text-xs">
    <div className="hover:text-green-500 cursor-pointer">{author}</div>
    <div className="text-subheader">
      {date.toLocaleDateString()} · {duration} min read
    </div>
  </div>
);

const ArticleItem = ({
  title,
  summary,
  author,
  date,
  duration,
  className,
  imageId,
}) => (
  <div className={classNames("flex justify-between items-start", className)}>
    <div class="flex-1">
      <a className="cursor-pointer">
        <div className="font-bold text-2xl">{title}</div>
        <div className="text-subheader text-sm mb-3">{summary}</div>
      </a>
      <div className="flex justify-between items-center">
        <AuthorAndDuration {...{ author, date, duration }} />
        <div>
          <Bookmark />
          <i className="material-icons cursor-pointer ml-2 text-gray-500 hover:text-black">
            more_horiz
          </i>
        </div>
      </div>
    </div>
    <img className="ml-4" src={`https://picsum.photos/id/${imageId}/120/120`} />
  </div>
);

export const Main = () => (
  <div className="flex container m-auto">
    <div className="w-2/3 pr-4">
      {articles.map((article) => (
        <ArticleItem
          className="mb-16 last:mb-0"
          key={article.id}
          {...article}
        />
      ))}
    </div>
    <div className="w-1/3 pl-4">
      <div className="bg-gray-200">
        <ul className="p-6">
          {articles
            .slice(0, 4)
            .map(({ id, title, authorImageId, author, date, duration }) => (
              <li key={id} className="mb-6 last:mb-0">
                <div className="flex align-top items-start">
                  <img
                    className="rounded-full mr-4 w-10"
                    src={`https://picsum.photos/id/${authorImageId}/40/40`}
                  />
                  <div className="flex flex-col min-w-0">
                    <a className="font-bold truncate mb-1 cursor-pointer">
                      {title}
                    </a>
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
