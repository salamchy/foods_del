import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick}>NEXT</div>
  )
}

const simplePrevArrow = (props) => {
  return (
    <div className={className} style={{ ...style, display: "block", background: "green" }} onClick={onClick}>BACK</div>
  )
}

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular")
        setRecipes(specials);

      })
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
        },
      },
    ],

    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />
  };

  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <p className="subtitle">Customer Favourite</p>
        <h2 className="title md:w-[520px]">Popular Categories</h2>
      </div>

      <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
        <button onClick={() => slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5"><FaAngleLeft className="w-8 h-8 p-1" /></button>
        <button onClick={() => slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5 bg-green"><FaAngleRight className="w-8 h-8 p-1" /></button>
      </div>

      <Slider ref={slider} {...settings} className="slider-container mt-10">
        {
          recipes.map((item, index) => (
            <div key={index} className="px-5"> {/* Add padding between cards */}
              <Cards item={item} />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
export default SpecialDishes