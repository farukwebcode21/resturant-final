import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[600px]"
        // style={{
        //   backgroundImage: `url("${img}")`,
        // }}
      >
        {/* <div className="hero-overlay bg-opacity-40"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="w-[1000px] h-[300px] flex flex-col bg-opacity-80 bg-[#252525] justify-center items-center uppercase">
            <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
            <p className="mb-5 text-white">{subTitle}</p>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "200px" }} /> */}
    </Parallax>
  );
};

export default Cover;
