import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <a target="_blank" href={data.photographer_url}>
        <p>{data.photographer}</p>
      </a>
      <div className="imageContainer">
        <a target="_blank" href={data.src.large}>
          <img src={data.src.large} alt="Top pic on pexels" />
        </a>
      </div>
      <p>
        {data.alt !== ""
          ? data.alt
          : "See beyond the words, have your own description of this picture."}
      </p>
    </div>
  );
};

export default Picture;
