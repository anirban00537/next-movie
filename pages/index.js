import { getPopularMovies } from "../service/movies";
import Home_banner from "../components/Home_banner";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
export default function Home({ popularMovies }) {
  const [movieWithCatagory, setmovieWithCatagory] = useState({
    popular: [],
    top_rated: [],
    upcoming: [],
  });
  useEffect(() => {
    setmovieWithCatagory({
      ...movieWithCatagory,
      popular: popularMovies,
    });
    console.log(popularMovies);
  }, []);
  return (
    <div className="">
      <Home_banner coverImgArr={movieWithCatagory.popular.slice(0, 3)} />
      <div className="container">
        <h3 className="headLine">Whats trending?</h3>
        <div className="trending">
          {movieWithCatagory.popular.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { data } = await getPopularMovies();
  console.log(data);
  return {
    props: {
      popularMovies: data.results.slice(0, 9),
    },
  };
};
