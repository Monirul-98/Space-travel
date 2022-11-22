import React from "react";

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center mx-auto">
      <section className="w-1/2">
        <h1 className="fs-500 ff-sans-cond letter-spacing-1 uppercase text-light">
          So, you want to travel to <br />
          <span className="fs-900 ff-serif uppercase my-6">Space</span>
        </h1>
        <p className="fs-400 ff-serif w-2/3 text-light leading-8 ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className="mt-28 w-1/2">
        <a
          className="large-button uppercase ff-serif fs-600 bgc-white text-dark rounded-full"
          href="/"
        >
          Explore
        </a>
      </section>
    </div>
  );
};

export default Home;
