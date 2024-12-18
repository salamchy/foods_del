import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(true);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div className="card-container">
      <div className="card bg-base-100 shadow-xl relative flex flex-col">
        {/* Heart Icon */}
        <div
          className={`rating gap-1 absolute right-2 top-2 p-2 heartStar bg-green rounded-full ${isHeartFilled ? "text-rose-500" : "text-white"
            }`}
          onClick={handleHeartClick}
        >
          <FaHeart className="h-6 w-6 cursor-pointer" />
        </div>
        {/* Card Image */}
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="object-cover h-48 md:h-64 lg:h-72  hover:scale-105 transition-transform duration-300"
            />
          </figure>
        </Link>
        {/* Card Body */}
        <div className="card-body p-4 flex flex-col justify-between">
          <Link to={`/menu/${item._id}`}>
            <h2 className="card-title text-lg font-bold mb-2">{item.name}</h2>
          </Link>
          <p className="text-sm text-gray-600 mb-4">Description of Items</p>
          <div className="card-actions flex justify-between items-center">
            <h5 className="font-semibold text-lg">
              <span className="text-sm text-red">रु: </span>
              {item.price}/-
            </h5>
            <button className="btn bg-green text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
