import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=abdb03f8abcf67d9d8dda1bdbff21b0a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  if (detail === undefined){
    return <></>
  }
  return (
<section className="detail-container">
<Link to='/' className='back-button'>
<i className="fas fa-chevron-circle-left"></i> 
<p>Movies</p>
</Link>
<div className="background" style= {{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${detail.backdrop_path})` }} alt={detail.title}>
<div className='summary'>
<img
        src={`https://image.tmdb.org/t/p/w780${detail.poster_path}`}
        alt="movie-poster"
      />
      <div className='detail'>

    <p> {detail.overview} <span className='rating'>{detail.vote_average}/10</span></p>
    
</div>
</div>
</div>
     
</section>

  );
};
export default MovieDetail;
