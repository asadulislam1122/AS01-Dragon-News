import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router";

const NewsDetailsCart = ({ news }) => {
  // console.log(news);
  return (
    <div>
      <div>
        <img
          className="w-full mt-8 h-[400px] object-cover rounded-xl mb-4"
          src={news.image_url}
          alt=""
        />
        <p className="mt-4 font-bold text-xl">{news.title}</p>
        <p className="mt-4 text-[18px] text-gray-600">{news.details}</p>
        <Link
          className="btn btn-secondary mt-4 mb-4"
          to={`/category/${news.category_id}`}
        >
          <IoArrowBackCircleSharp className="text-2xl text-green-600" /> Back to
          Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCart;
