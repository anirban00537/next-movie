import request from "../utils/request";

export const getPopularMovies = async () =>
  await request.get(
    "/discover/movie?sort_by=popularity.desc" + process.env.NEXT_PUBLIC_API_KEY
  );

export const getSingleMovieDetails = async (id) =>
  await request.get(`/movie/${id}?${process.env.NEXT_PUBLIC_API_KEY}`);
