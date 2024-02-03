import MainTitle from "../components/MainTitle";
import MovieApiCom from "./MovieApiCom";

const TopRated = () => {
  let h2 = "Top Rated";
  return (
    <div className="container pb-[150px]">
      <MainTitle h2={h2} />
      <MovieApiCom
        apiUrl={
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2"
        }
      />
    </div>
  );
};

export default TopRated;
