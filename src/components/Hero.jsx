import { Link } from "react-router-dom";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="hero h-screen">
      <div className="container h-full flex relative z-[2] items-center justify-center text-center">
        <div>
          <h1 data-aos-duration="1000" data-aos="fade-up">
            The Best Streaming Experience
          </h1>
          <p data-aos-duration="1500" data-aos="fade-up" className="my-4">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="w-[209px]  mx-auto h-[56px]">
            <Link to={"/movies"}>
              <Btn color={"[#e50000]"} title={"Start Watching Now"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
