import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  let [movieDetails, setMovieDetails] = useState();
  let basImg = `https://image.tmdb.org/t/p/w500/`;

  let { movieId } = useParams();
  useEffect(() => {
    let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    let token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDIzNTQyYWQ5YjkzZGEzMDU5M2RmY2Q2YTI3ODg0MCIsInN1YiI6IjY1NmI2MDVkNmVlY2VlMDExZGY3YTg5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nBsfCTiDgFfQcQl8mqgRkQ-ywzD770DaZ9PuszaceLk";
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(apiUrl, {
        headers: headers,
      })
      .then(function (response) {
        setMovieDetails(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        setMovieDetails(null);
      });
  }, []);
  return (
    <div className="pt-[150px] pb-10">
      <div className="container">
        {movieDetails !== null ? (
          <>
            <div className=" md:flex justify-between gap-5  ">
              <img
                alt="img"
                className="rounded-lg w-full mb-5 md:mb-0  md:w-[50%] object-cover h-[400px] "
                src={basImg + movieDetails?.poster_path}
              />
              <div className="bg-[#1A1A1A] border-[3px] border-[#262626] flex-1 p-3">
                <div className="mb-5">
                  <p>Description</p>
                  <h4 className="text-white">{movieDetails?.overview}</h4>
                </div>
                <div className="mb-5">
                  <p>TagLine</p>
                  <h4 className="text-white">{movieDetails?.tagline}</h4>
                </div>
                <div className="mb-5">
                  <p> release_date</p>
                  <h4 className="text-white">{movieDetails?.release_date}</h4>
                </div>
                <div className="">
                  <p>Language</p>
                  <h4 className="text-white">En</h4>
                </div>
              </div>
            </div>
            <h1 className="text-center mt-5">{movieDetails?.title}</h1>
          </>
        ) : (
          <h1 className="text-center ">WE DONT HAVE DETAILS TO THAT </h1>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
