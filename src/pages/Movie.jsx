import HeroMovie from "../components/HeroMovie";
import TopRated from "../components/TopRated";
import Trending from "../components/Trending";
import Upcoming from "../components/Upcoming";

const Movie = () => {
  return (
    <div>
      <HeroMovie />
      <Trending />
      <Upcoming />
      <TopRated />
    </div>
  );
};

export default Movie;
