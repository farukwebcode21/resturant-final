import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad_1 from "../../../assets/menu/pizza-bg.jpg";
import salad_2 from "../../../assets/menu/salad-bg.jpg";
import salad_3 from "../../../assets/menu/soup-bg.jpg";
import OrderTab from "../../Order/Order/OrderTab";

const ChefRecommends = () => {
  const cardsData = [
    {
      id: "01",
      name: "Caeser Salad",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_1,
      price: 150,
    },
    {
      id: "02",
      name: "Pizza King",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_2,
      price: 250,
    },
    {
      id: "03",
      name: "Tai Soup",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_3,
      price: 10,
    },
  ];
  return (
    <section className="my-10">
      <SectionTitle subHeading={"Should Try"} heading={"Chef recommends"} />
      <OrderTab items={cardsData} />
    </section>
  );
};

export default ChefRecommends;
