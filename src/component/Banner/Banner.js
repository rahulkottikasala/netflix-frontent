import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./Banner.css";
var rn = require("random-number");

const Banner = () => {
  const [movie, setMovie] = useState();
  const [number, setNumber] = useState();
  var gen = rn.generator({
    min: 0,
    max: 19,
    integer: true,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        
         
        // setMovie(response.data.results[`${number ? number : 0}`])
        setMovie(response.data.results[gen()])
        console.log(response.data.results);
        console.log('number: '+number);
      })
  },[]);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? `${movie.title ? movie.title :movie.name}` : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
