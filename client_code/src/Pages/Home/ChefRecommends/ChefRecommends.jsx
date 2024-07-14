import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad_1 from "../../../assets/home/slide1.jpg";
import salad_2 from "../../../assets/home/slide2.jpg";
import salad_3 from "../../../assets/home/slide3.jpg";

const ChefRecommends = () => {
  return (
    <section className="my-10">
      <SectionTitle subHeading={"Should Try"} heading={"Chef recommends"} />
      <div className="my-10 flex justify-center space-x-6">
        <div className="card rounded-none bg-base-100 w-auto shadow-2xl justify-center items-center">
          <figure>
            <img className="w-[410px] h-[300px]" src={salad_1} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Caeser Salad</h2>
            <p>Lettuce, Eaggs, Parmesan Cheese, Chicken,Breast Fillets</p>
            <div className="card-actions">
              <button className="btn  bg-gray-600 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="card rounded-none bg-base-100 w-auto shadow-2xl justify-center items-center">
          <figure>
            <img className="w-[410px] h-[300px]" src={salad_2} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Caeser Salad</h2>
            <p>Lettuce, Eaggs, Parmesan Cheese, Chicken,Breast Fillets</p>
            <div className="card-actions">
              <button className="btn  bg-gray-600 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="card rounded-none bg-base-100 w-auto shadow-2xl justify-center items-center">
          <figure>
            <img className="w-[410px] h-[300px]" src={salad_3} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Caeser Salad</h2>
            <p>Lettuce, Eaggs, Parmesan Cheese, Chicken,Breast Fillets</p>
            <div className="card-actions">
              <button className="btn  bg-gray-600 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
