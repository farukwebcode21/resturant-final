import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="backdrop-blur-md bg-opacity-70  shadow-lg"
      style={{
        backgroundImage: `url(${featuredImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured item"}
      />
      <div className="relative flex items-center justify-center">
        <div className="relative max-w-4xl p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={featuredImage} alt="Food" />
            </div>
            <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0 text-white">
              <p className="text-sm mb-2">March 20, 2023</p>
              <h3 className="text-2xl font-semibold mb-4">
                WHERE CAN I GET SOME?
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <a href="#" className="text-white font-semibold underline">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
