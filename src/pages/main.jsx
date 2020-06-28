import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import store from "../store";
import { Bookmark } from "../components/bookmark.jsx";
import { IconButton } from "../components/icon-button.jsx";
import { useTooltip } from "../hooks/useTooltip.js";
import { Button } from "../components/button.jsx";

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
  author,
  date,
  duration,
  className,
  imageId,
  content,
}) => (
  <div className={classNames("flex justify-between items-start", className)}>
    <div className="flex-1">
      <Link to={`/article/${id}`} className="cursor-pointer">
        <h3 className="font-bold text-2xl font-serif leading-tight mb-3">
          {title}
        </h3>
        <p className="text-subheader text-sm mb-3">
          {content[0].slice(0, 138) + "..."}
        </p>
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

const EditorAvatar = ({ name, authorImageId }) => {
  const [setReferenceElement, setIsVisible, tooltip] = useTooltip(
    <div className="p-3">
      <div className="flex items-start">
        <div>
          <div className="text-ld font-bold">{name}</div>
          <div className="text-sm text-green-500 mb-2">
            Portal member since {new Date().toLocaleDateString()}
          </div>
          <div className="text-sm text-subheader mb-2">
            Wow such a developer and writer
          </div>
        </div>
        <img
          className="rounded-full ml-4 w-16"
          src={`https://picsum.photos/id/${authorImageId}/70/70`}
        />
      </div>
      <hr />
      <div className="pt-3 flex items-center justify-between">
        <span>Followed by 100k people</span>
        <Button>Follow</Button>
      </div>
    </div>
  );

  return (
    <div
      className="mr-4 w-12 flex-none cursor-pointer"
      ref={setReferenceElement}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <img
        className="rounded-full"
        src={`https://picsum.photos/id/${authorImageId}/50/50`}
      />
      {tooltip}
    </div>
  );
};

const NewFromNetwork = () => (
  <div className="bg-gray-200">
    <div className="flex pl-10 pr-5 py-4 justify-between items-end bg-green-300">
      <div className="text-xl font-bold mb-3 leading-none">
        New from your network
      </div>
      <img src="https://picsum.photos/id/870/100/100?grayscale&blur=1" />
    </div>
    <ul className="p-6">
      {store.articles
        .slice(0, 4)
        .map(({ id, title, authorImageId, author, date, duration }) => (
          <li key={id} className="mb-6 last:mb-0">
            <div className="flex align-top items-start">
              <EditorAvatar name={author} authorImageId={authorImageId} />
              <div className="flex flex-col min-w-0">
                <Link
                  to={`/article/${id}`}
                  className="font-bold truncate mb-1 cursor-pointer font-serif"
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
);

const Layout = ({ main, sidebar }) => (
  <div className="flex container-main m-auto">
    <div className="w-full lg:w-2/3 lg:pr-4 xl:pr-6">{main}</div>
    <div className="hidden lg:block lg:w-1/3 lg:pl-4 xl:pl-6">{sidebar}</div>
  </div>
);

export const Main = () => (
  <Layout
    main={store.articles.map((article) => (
      <ArticleItem className="mb-16 last:mb-0" key={article.id} {...article} />
    ))}
    sidebar={<NewFromNetwork />}
  />
);
