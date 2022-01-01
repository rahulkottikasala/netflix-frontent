import React, { useEffect, useState } from "react";
import { imageUrl } from "../../constants/constants";
import "./RowPost.css";
import axios from "../../Axios";

const RowPost = (props) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
      // console.log(response.data.results);
    });
  }, []);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
            <img className={props.isBig ? 'poster' : 'smallPoster'}  src={`${imageUrl+obj.backdrop_path}`} alt="" />
    
        
          
        ))}
      </div>
    </div>
  );
};

export default RowPost;
