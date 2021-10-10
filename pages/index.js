import { useEffect } from "react";
import { useTrendingMoviesState } from "../state/movies";
import { getPopularMovies } from "../service/movies";
import Home_banner from "../components/Home_banner";
import MovieCard from "../components/MovieCard";

export default function Home({ popularMovies }) {
  const [movies, setMovies] = useTrendingMoviesState();
  useEffect(() => {
    setMovies(popularMovies);
    console.log(popularMovies);
  }, []);
  return (
    <div className="">
      <Home_banner coverImgArr={movies.slice(0, 3)} />
      <div className="container">
        <h3 className="headLine">Whats trending?</h3>
        <div className="trending">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { data } = await getPopularMovies();
  return {
    props: {
      popularMovies: data.results.slice(0, 9),
    },
  };
};
