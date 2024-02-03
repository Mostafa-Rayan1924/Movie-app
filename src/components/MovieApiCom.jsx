import { useEffect, useState } from "react";
import heroBox from "../images/Home/hero2.jpg";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const MovieApiCom = ({ apiUrl }) => {
  let [movieData2, setMovieData2] = useState();
  let basImg = `https://image.tmdb.org/t/p/w500/`;

  // maping api and store it into slider
  let movieDataMap2 = movieData2?.map((item) => {
    return (
      <SwiperSlide
        key={item.id}
        className="bg-[#1A1A1A] border relative hover:border-[#e50000]  border-[#262626] rounded-lg p-[20px] transition-all duration-300">
        <Link data-aos="fade-up" data-aos-duration="2500" to={`${item.id}`}>
          <div>
            <img
              className="object-cover mb-2 rounded-lg brightness-[0.5]"
              src={basImg + item.poster_path}
            />
            <h4 className="font-[600] text-center">
              {item.title
                ? `${item.title.slice(0, 16)}...`
                : `${item.name.slice(0, 16)}...`}
            </h4>
            <h4
              className={`font-[600]  absolute top-0 left-[1px]  rounded-lg bg-[#e50000] p-1 ${
                item.release_date ? "" : null
              } `}>
              {item.media_type ? item.media_type : item.release_date}
            </h4>
            {item.vote_average ? (
              <div className="mt-2">
                <div className="flex gap-1 items-center">
                  <h5>Vote_Avg:</h5>
                  <p>{item.vote_average}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <h5>Vote_count:</h5>
                  <p>{item.vote_count}</p>
                </div>
              </div>
            ) : null}
          </div>
        </Link>
      </SwiperSlide>
    );
  });
  // calling api of انواع
  useEffect(() => {
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
        setMovieData2(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper text-white">
        {movieData2 == null ? (
          <h2 className="text-center">loading...</h2>
        ) : (
          movieDataMap2
        )}
      </Swiper>
    </div>
  );
};

export default MovieApiCom;
