import React, { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { darkMode } = useContext(ThemeContext);
  const { title, author, description, url, urlToImage } = news;

  return (
    <div className="col-12">
      <div class={darkMode ? "card mb-3 bg-dark text-light" : "card mb-3"}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={urlToImage}
              class="img-fluid rounded-start"
              alt="..."
              style={{ height: "100%" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <p class="card-text">
                <small class="text-body-secondary">{author}</small>
              </p>
              <a
                href={url}
                target="_blank"
                className={
                  darkMode
                    ? "btn btn-secondary btn-sm"
                    : "btn btn-primary btn-sm"
                }
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
