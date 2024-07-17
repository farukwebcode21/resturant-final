import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad_1 from "../../../assets/menu/pizza-bg.jpg";
import salad_2 from "../../../assets/menu/salad-bg.jpg";
import salad_3 from "../../../assets/menu/soup-bg.jpg";
import Card from "../../Shared/Card/Card";

const ChefRecommends = () => {
  const cardsData = [
    {
      name: "Caeser Salad",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_1,
      price: 150,
    },
    {
      name: "Pizza King",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_2,
      price: 250,
    },
    {
      name: "Tai Soup",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_3,
      price: 10,
    },
  ];
  return (
    <section className="my-10">
      <SectionTitle subHeading={"Should Try"} heading={"Chef recommends"} />
      <div className="my-10 flex justify-center space-x-6">
        {cardsData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
