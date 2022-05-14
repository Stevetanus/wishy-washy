import React from "react";

const about = () => {
  return (
    <div style={{ minHeight: "92.5vh" }} className="about">
      <h3>
        This is a Photosite you can search about topics what you want to
        explore, you can click on the photo or the name of photographer to see
        more details, all photos are from{" "}
        <a href="https://www.pexels.com/">pexels</a>
      </h3>
      <a
        href="https://stevetanus.github.io"
        rel="noopener noreferrer"
        target="_blank"
        className="img"
      >
        <img
          src="https://github.com/Stevetanus/Stevetanus.github.io/blob/main/assets/img/android-chrome-192x192.png?raw=true"
          alt="stevetanus' favicon"
        />
      </a>
      <h2>
        Watch more projects by{" "}
        <a
          href="https://github.com/Stevetanus"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>stevetanus</span>
        </a>
      </h2>
      <div className="project">
        <h4>
          <a
            href="https://wandrous.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Wandrous
          </a>
        </h4>
        <h4>
          <a
            href="https://calcureactor.netlify.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Calcureactor
          </a>
        </h4>
        <h4>
          <a
            href="https://quotexts.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Quotexts
          </a>
        </h4>
      </div>
      <div className="project__img">
        <a
          href="https://wandrous.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://github.com/Stevetanus/wandrous/blob/main/public/images/icons8-forest-96.png?raw=true"
            alt=""
          />
        </a>
        <a
          href="https://calcureactor.netlify.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://github.com/Stevetanus/react-calculator/blob/main/public/favicon.png?raw=true"
            alt=""
          />
        </a>
        <a
          href="https://quotexts.netlify.app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://github.com/Stevetanus/Quotexts/blob/master/public/favicon.png?raw=true"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default about;
