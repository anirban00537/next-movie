const index = ({ movie }) => {
  return (
    <div className="card_container">
      <img
        className="img-fluid img_round_edge"
        src={`${process.env.NEXT_PUBLIC_IMG_URL}${movie.poster_path}`}
      />
      <div className="card_content">
        <span>39%</span>
        <h5>{movie.original_title}</h5>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default index;
