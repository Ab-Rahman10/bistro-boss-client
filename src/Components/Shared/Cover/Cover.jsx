import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the cover image"
      strength={-200}
    >
      <div className="hero h-[600px] mb-10">
        <div
          className="hero-overlay bg-opacity-60"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="hero-content text-neutral-content text-center bg-black bg-opacity-30 py-10 px-6 sm:py-16 sm:px-20 md:py-20 md:px-40 lg:py-24 lg:px-60">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
