import { useEffect, useState } from "react";
import heroBox from "../images/Home/hero2.jpg";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const BoxOfApi = () => {
  let [movieData, setMovieData] = useState();
  // maping api and store it into slider
  let movieDataMap = movieData?.map((item) => {
    return (
      <SwiperSlide
        key={item.id}
        className="bg-[#1A1A1A] border hover:border-[#e50000]  border-[#262626] rounded-lg p-[20px] transition-all duration-300">
        <img
          alt="img"
          className="object-cover mb-2 h-[300px] rounded-lg brightness-[0.5]"
          src={heroBox}
        />
        <h4 className="font-[600]">{item.name}</h4>
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
      .get("https://api.themoviedb.org/3/genre/movie/list?language=en", {
        headers: headers,
      })
      .then(function (response) {
        setMovieData(response.data.genres);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div data-aos-duration="1500" data-aos="zoom-in-up" className="relative">
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
        {movieData == null ? (
          <h2 className="text-center">loading...</h2>
        ) : (
          movieDataMap
        )}
      </Swiper>
    </div>
  );
};

export default BoxOfApi;
