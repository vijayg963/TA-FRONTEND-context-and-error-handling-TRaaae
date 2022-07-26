import React from "react";
import { Link } from "react-router-dom";
import articles from "./data/articles.json";
import withSearch from "./WithSearch";

const Articles = (props) => {
  let { searchTerm } = props;

  let filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm)
  );
  return (
    <>
      <ul className="articles">
        {filteredArticles.map((article) => (
          <li key={article.slug}>
            <Link to={"articles/" + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withSearch(Articles);
