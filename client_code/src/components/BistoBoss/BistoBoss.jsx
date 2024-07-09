import backgroundImage from "../../assets/home/chef-service.jpg";
const BistoBoss = () => {
  return (
    <div>
      <div
        className="hero h-[520px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-[1096px] h-[333px] bg-white flex flex-col justify-center">
            <h1 className="mb-5 text-4xl uppercase text-gray-600">
              Bistro Boss
            </h1>
            <p className="mb-5 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistoBoss;
