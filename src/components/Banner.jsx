import React from "react";
import "../style/Banner.css";
import MovieSlide from "./MovieSlide";
import { Link } from "react-router-dom";

const Banner = ({ movie }) => {
  //   const setSlide = () => {
  //     const beforeSlide = images[images.length - 1];
  //     const afterSlide = images[0];
  //     // 무한 슬라이드를 구현하기 위해 새롭게 배열을 만듦.
  //     return [beforeSlide, ...images, afterSlide];
  //   };
  console.log("Component/Banner.jsx", movie);
  const div_style = {
    // 객체?.속성명 : ?는 객체가 있을 때만 가져오는? 문법인 듯하다.
    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie[0]?.poster_path})`,
  };
  return (
    <div className="banner-container">
      <Link to={`/movies/${movie[0]?.id}`} style={{ textDecoration: 'none' , color: 'white'}}>
        <div className="banner-item" style={div_style}></div>
        <div className="banner-text-container">
          <div className="banner-text">
            <h3>{movie[0]?.title}</h3>
            <p>{movie[0]?.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Banner;
