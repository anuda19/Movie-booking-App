import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";
import Footer from "../../components/footer/Footer.jsx";
import { getAllMovies } from "../../api/movies";
import Loader from "../../components/loader/Loader.jsx";
import { BsPlay } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = ({watchlist, setWatchlist}) => {
  const [allmovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setMovies(data);
          setAllMovies(data);
          console.log(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const filterMoviesBySearch = (searchText) => {
    const filteredMovies = allmovies.filter((movie) => {
      return movie.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setMovies(filteredMovies);
  };

  const handleGotoDetailPage = (movieId) => {
    navigate(`/movie-detail/${movieId}`);
  };

  const handleWatchlist = (item) => {
    if(watchlist.indexOf(item) !== -1) return;
    setWatchlist([...watchlist, item])
  };

  return (
    <div>
      <Header filterMoviesBySearch={filterMoviesBySearch} showSearch={true} watchlist={watchlist} hideWatch={true} />

      <ImageCarousel images={[img1, img2, img5, img4, img6, img7]} />
      <div className="blurred_area"></div>
      <div className="main-section">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="movie_card" >
            {movies.map((movie) => {
              return (
                <div className="single_card" key={movie._id}>
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
                      <span title='add to watchlist'>
                        <GrAdd onClick={()=>handleWatchlist(movie)}/>
                      </span>
                    </div>
                  </div>
                    <p>{movie.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Home;
