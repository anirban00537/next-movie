import { atom, useRecoilState } from "recoil";

export const trendingMoviesState = atom({
  key: "trendingMoviesState",
  default: [],
});

export const useTrendingMoviesState = () => {
  const [movies, setMovies] = useRecoilState(trendingMoviesState);
  return [movies, setMovies];
};
