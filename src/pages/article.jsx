import React from "react";
import { useParams } from "react-router-dom";

export const Article = (props) => {
  let { articleId } = useParams();
  console.log(articleId);
  return <p>This is article</p>;
};
