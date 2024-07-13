import backgroundImage from "../../assets/home/chef-service.jpg";
const BistoBoss = () => {
  return (
    <div className="my-20">
      <div
        className="hero h-[520px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero text-neutral-content text-center">
          <div className="w-[1096px] h-[333px] bg-white hero-content ">
            <div className="w-[750px] h-[140px]">
              <h1 className="mb-5 text-4xl uppercase text-gray-600">
                Bistro Boss
              </h1>
              <p className="mb-5 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistoBoss;
