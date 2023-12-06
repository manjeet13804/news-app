import { useState, useEffect } from "react";

const FetchData = (pageSize, country, category, apiKey) => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  };

  return { articles, totalResults, fetchMoreData };
};

export default FetchData;