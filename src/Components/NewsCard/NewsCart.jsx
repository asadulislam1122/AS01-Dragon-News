import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCart = ({ news }) => {
  const {
    title,
    id,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl  hover:shadow-2xl transition-shadow duration-300">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-2xl">
          <FaRegBookmark className="text-gray-500 hover:text-primary cursor-pointer" />
          <FaShareAlt className="text-gray-500 hover:text-primary cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg text-gray-900">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full object-cover h-48"
        />
      </figure>

      {/* Details */}
      <div className="card-body px-4 pt-2 pb-0">
        <p className="text-sm text-gray-600">
          {details.slice(0, 200)}...
          <Link
            to={`/details/${id}`}
            className="text-primary font-medium cursor-pointer"
          >
            {" "}
            Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 text-gray-500 border-t px-4 py-3 text-sm">
        <div className="flex items-center gap-2 text-warning">
          <FaStar />
          <span className="font-semibold">{rating.number}</span>
          <span className="badge badge-warning badge-sm text-white">
            {rating.badge}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
