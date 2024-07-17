import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad_1 from "../../../assets/menu/pizza-bg.jpg";
import salad_2 from "../../../assets/menu/salad-bg.jpg";
import salad_3 from "../../../assets/menu/soup-bg.jpg";
import Card from "../../Shared/Card/Card";

const ChefRecommends = () => {
  const cardsData = [
    {
      title: "Caeser Salad",
      content: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_1,
    },
    {
      title: "Pizza King",
      content: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_2,
    },
    {
      title: "Tai Soup",
      content: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: salad_3,
    },
  ];
  return (
    <section className="my-10">
      <SectionTitle subHeading={"Should Try"} heading={"Chef recommends"} />
      <div className="my-10 flex justify-center space-x-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            cardImg={card.image}
            content={card.content}
            cardButton={"Add To Card"}
          />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
