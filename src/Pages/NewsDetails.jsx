import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCart from "./NewsDetailsCart";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  //   console.log(data, id, news);
  useEffect(() => {
    const newsData = data.find((singleNews) => singleNews.id == id);
    setNews(newsData);
  }, [data, id]);

  return (
    <div>
      <header className="mt-8">
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto md:grid gap-5 px-4 py-4 md:grid-cols-12">
        <section className="col-span-9">
          <h2 className="font-bold text-2xl">News Details</h2>
          <NewsDetailsCart news={news}></NewsDetailsCart>
        </section>
        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
