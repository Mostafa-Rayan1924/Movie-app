import MainTitle from "../components/MainTitle";
import MovieApiCom from "./MovieApiCom";

const Upcoming = () => {
  let h2 = "New Releases";
  return (
    <div className="container pb-[150px]">
      <MainTitle h2={h2} />
      <MovieApiCom
        apiUrl={
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        }
      />
    </div>
  );
};

export default Upcoming;
