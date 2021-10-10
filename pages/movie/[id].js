import { getSingleMovieDetails } from "../../service/movies";
import { useState } from "react";
const index = ({ movieDetailsFromServer }) => {
  return (
    <div className="container">
      <img
        className="img-fluid detaile_img"
        src={`${process.env.NEXT_PUBLIC_IMG_URL}${movieDetailsFromServer.backdrop_path}`}
      />
      <div className="details_container">
        <h1>{movieDetailsFromServer.original_title}</h1>
        <p></p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const { data } = await getSingleMovieDetails(id);

  return {
    props: {
      movieDetailsFromServer: data,
    },
  };
};
export default index;
