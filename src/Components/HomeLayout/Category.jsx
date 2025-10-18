import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCart from "../NewsCard/NewsCart";

const Category = () => {
  const { id } = useParams();
  const newsDataPromiss = useLoaderData();
  const [cetegoryNews, setCetegoryNews] = useState([]);
  console.log(newsDataPromiss);
  // console.log(id);
  useEffect(() => {
    if (id == 0) {
      setCetegoryNews(newsDataPromiss);
      return;
    } else if (id == "1") {
      const filteredData = newsDataPromiss.filter(
        (news) => news.others.is_today_pick == true
      );
      setCetegoryNews(filteredData);
    } else {
      const filteredData = newsDataPromiss.filter(
        (news) => news.category_id == id
      );
      // console.log(filteredData);
      setCetegoryNews(filteredData);
    }
  }, [newsDataPromiss, id]);

  return (
    <div>
      <h2 className="font-bold">
        {" "}
        Total➡<span className="text-secondary">
          ({cetegoryNews.length})
        </span>{" "}
        News Found
      </h2>
      <div className="grid grid-cols-1 mt-6 gap-4">
        {cetegoryNews.map((news) => (
          <NewsCart key={news.id} news={news}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default Category;
