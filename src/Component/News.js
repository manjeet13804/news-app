import React from "react";
import NewsCard from "./NewsCard";
import FetchData from "./FetchData";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const pageSize = "9";
  const country = "us";
  const category = "general"
  const apiKey = "caa1dea5d88845059fe2dc3df50a633e";

  const { articles, totalResults, fetchMoreData } = FetchData(
    pageSize,
    country,
    props.category,
    apiKey
  );

  // const capsFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

  return (
    <>
    {console.log((props.category))}
      <h2 className="d-flex justify-content-center mt-2 mb-2">
        News-App - Top Headlines {(props.type)}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsCard
                    title={
                      element.title
                        ? element.title.length >= 55
                          ? element.title.slice(0, 30)
                          : element.title
                        : ""
                    }
                    description={
                      element.description
                        ? element.description.length >= 75
                          ? element.description.slice(0, 65)
                          : element.description
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={!element.author ? "Anonymous" : element.author}
                    date={!element.publishedAt ? "" : element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
