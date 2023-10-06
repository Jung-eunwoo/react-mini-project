import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MoviesCard from "../components/MoviesCard";
import Accordion from "react-bootstrap/Accordion";
import "../style/Movies.css";

const Movies = () => {
  const [dropdownCheck, setDropdownCheck] = useState(false);
  const [filter, setFilter] = useState([]);
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  // console.log(popularMovies);
  let movieList = [popularMovies, topRatedMovies, upcomingMovies];
  const handleSelect = (e) => {
    setFilter(movieList[e.target.value]);
    console.log('filter',filter)
  };
  const movieSorted = (keyword) => {
    let result;
    // react에서 state는 불변성을 유지해야하기 때문에
    // 전개 연산자를 통해서 새로운 배열을 생성하고 sort()함수를 실행해야 한다.
    // 정렬된 배열을 state에 다시 초기화해주면 영화정보가 정렬되어 출력된다.
    let list = [...filter];
    if (keyword[0] === "평점") {
      result =
        keyword[1] === "asc"
          ? list.sort((a, b) => a.vote_average - b.vote_average)
          : list.sort((a, b) => b.vote_average - a.vote_average);
    } else if (keyword[0] === "인기도") {
      result =
        keyword[1] === "asc"
          ? list.sort((a, b) => a.popularity - b.popularity)
          : list.sort((a, b) => b.popularity - a.popularity);
    } else if (keyword[0] === "제목") {
      result =
        keyword[1] === "asc"
          ? list.sort((a, b) => a.title.localeCompare(b.title))
          : list.sort((a, b) => b.title.localeCompare(a.title));
    }
    // vote_average는 객체 속성명
    // let result = list.sort((a,b)=>a.vote_average-b.vote_average);
    // console.log('정렬결과 : ', result)
    setFilter(result);
  };
  return (
    <div className="movies-container">
      <div className="movies-sort-container">
        {
          <Accordion
            className="movies-sort-dropdown-bar"
            onClick={() => {
              setDropdownCheck(!dropdownCheck);
            }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>정렬</Accordion.Header>
              <Accordion.Body>
                <div className="movies-sort-dropdown-content">
                  <select onChange={handleSelect}>
                    <option value={0}>Popular Movie</option>
                    <option value={1}>Top Rated Movie</option>
                    <option value={2}>Upcoming Movie</option>
                  </select>
                  <select onChange={movieSorted}>
                    <option value={["제목", "asc"]}>제목 오름차순</option>
                    <option value={["제목", "desc"]}>제목 내림차순</option>
                    <option value={["평점", "asc"]}>평점 오름차순</option>
                    <option value={["평점", "desc"]}>평점 내림차순</option>
                    <option value={["인기도", "asc"]}>인기도 오름차순</option>
                    <option value={["인기도", "desc"]}>인기도 오름차순</option>
                  </select>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        }
      </div>
      <div className="movies-card-container">
        {filter?.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
