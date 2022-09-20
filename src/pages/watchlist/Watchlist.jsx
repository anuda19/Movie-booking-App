import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header'

const Watchlist = ({watchlist}) => {
    const navigate = useNavigate();

    const handleGotoDetailPage = (movieId) => {
    navigate(`/movie-detail/${movieId}`);
  };

  return (
    <>
        <Header  watchlist={watchlist}/>
    <div className='my-5 d-flex justify-content-center'>
        {watchlist.map((movie)=>{
            return (
                <div className="single_card my-5" key={movie._id}>
                  <img
                    src={movie.posterUrl}
                    alt="poster"
                    className="image-movie"
                    onClick={() => {
                      handleGotoDetailPage(movie._id);
                    }}
                  />
                  <div className="details">
                    <h6>{movie.name}</h6>
                    <div className="icons">
                      <span title='watch trailer'>
                        <BsPlay onClick={()=>window.open(movie.trailerUrl)}/>
                      </span>
                    </div>
                  </div>
                  <p>{movie.description}</p>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Watchlist