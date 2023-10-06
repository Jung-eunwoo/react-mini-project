import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MoviesCard = ({movie}) => {
    // console.log('MoviesCard.jsx', movie)
    const div_style = {
        // 객체?.속성명 : ?는 객체가 있을 때만 가져오는? 문법인 듯하다.
        url: `https://www.themoviedb.org/t/p/original${movie?.poster_path}`,
      };
  return (
    <div>
      <Card style={{ width: "13rem", height:"27rem" }}>
        <div>
          <Card.Img
            variant="top"
            src={div_style.url}
          />
        </div>
        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Text>{movie.release_date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoviesCard;
