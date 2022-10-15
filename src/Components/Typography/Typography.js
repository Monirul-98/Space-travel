import React from "react";
import "./Typography.css";

const Typography = () => {
  return (
    <section id="typography" className="container">
      <h1 className="numbered-title mb-12">
        <span className=" faded">02</span> Typography
      </h1>
      <div className="grid typography">
        <div>
          <div className="mb-8">
            <p className="text-light">Heading 1 - Bellefair Regular - 150px</p>
            <p className="fs-900 ff-serif uppercase">Earth</p>
          </div>
          <div className="mb-8">
            <p className="text-light">Heading 2 - Bellefair Regular - 100px</p>
            <p className="fs-800 ff-serif uppercase">Venus</p>
          </div>
          <div className="mb-8">
            <p className="text-light">Heading 3 - Bellefair Regular - 56px</p>
            <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
          </div>
          <div className="mb-8">
            <p className="text-light">Heading 4 - Bellefair Regular - 32px</p>
            <p className="fs-600 ff-serif uppercase">
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div className="mb-8 text-light">
            <p>
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p className="fs-500 ff-sans-cond letter-spacing-1 uppercase">
              So, you want to travel to space
            </p>
          </div>
        </div>

        <div>
          <div className="mb-8">
            <p className="text-light">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p className="fs-500 ff-serif uppercase">384,400 km</p>
          </div>
          <div className="mb-8">
            <p className="text-light">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p className="fs-200 ff-sans-cond letter-spacing-3 uppercase">
              Avg. Distance
            </p>
          </div>
          <div className="mb-8 ">
            <p className="text-light">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p className="fs-300 ff-sans-cond letter-spacing-2 uppercase">
              Europa
            </p>
          </div>
          <div>
            <p className="faded">Body Text</p>
            <p className="fs-400 ff-sans-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;
