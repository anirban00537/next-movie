import React from "react";

const index = ({ coverImgArr }) => {
  return (
    <div id="myCarousel" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class="active"
          aria-current="true"
        ></button>
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item banner_height">
          <img
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${coverImgArr[0]?.poster_path}`}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>{coverImgArr[0]?.original_title}</h1>
              <p>{coverImgArr[0]?.overview}</p>
            </div>
          </div>
        </div>

        <div class="carousel-item active">
          <img
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${coverImgArr[1]?.poster_path}`}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <div class="container">
            <div class="carousel-caption text-end">
              <h1>{coverImgArr[1]?.original_title}</h1>
              <p>{coverImgArr[1]?.overview}</p>
            </div>
          </div>
        </div>
        <div class="carousel-item banner_height">
          <img
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${coverImgArr[2]?.poster_path}`}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>{coverImgArr[2]?.original_title}</h1>
              <p>{coverImgArr[2]?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default index;
