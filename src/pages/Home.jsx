import React, { useContext, useEffect } from "react";
import Carousal from "../components/Carousal";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsActions";
import ThemeContext from "../context/theme/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const { allNews, dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("Indore");
  }, []);

  if (!allNews || allNews.length === 0) {
    return (
      <h1 className="text-secondary text-center my-3 display-1">Loading...</h1>
    );
  }

  return (
    <>
      <Carousal />
      <div
        className={
          darkMode ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"
        }
      >
        <h3 className="text-center my-3">Top News</h3>

        <section>
          <div className="row g-3">
            <WeatherCard />
            <div className="col-md-8 col-sm-12">
              {allNews.map((news, index) => (
                <NewsCard key={index} news={news} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
