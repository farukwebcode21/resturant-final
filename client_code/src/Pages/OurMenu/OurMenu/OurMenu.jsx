import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import { useMenu } from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const soups = menu.filter((item) => item.category === "soup").slice(0, 8);
  const dessert = menu
    .filter((item) => item.category === "dessert")
    .slice(0, 6);
  const salad = menu.filter((item) => item.category === "salad").slice(0, 6);
  const pizza = menu.filter((item) => item.category === "pizza").slice(0, 6);

  const categoryTexts = {
    dessert: (
      <div className="capitalize">
        Indulge in our sweet and delicious desserts, crafted to perfection just
        for you.
      </div>
    ),
    pizza: (
      <div className="capitalize">
        Enjoy our freshly baked pizzas with a variety of toppings to choose
        from.
      </div>
    ),
    salad: (
      <div className="capitalize">
        Fresh and healthy salads to complement your meal and satisfy your
        cravings.
      </div>
    ),
    soup: (
      <div className="capitalize px-10">
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </div>
    ),
  };

  return (
    <div className="mb-4">
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our Menu"}
        subTitle={"Would you like to try a dish?"}
      />
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />

      <MenuCategory
        items={dessert}
        title={"dessert"}
        coverImage={desertImg}
        subText={categoryTexts.desserts}
      />

      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImage={pizzaImg}
        subText={categoryTexts.pizza}
      />

      <MenuCategory
        items={salad}
        title={"salad"}
        coverImage={saladImg}
        subText={categoryTexts.salad}
      />

      <MenuCategory
        items={soups}
        title={"soup"}
        coverImage={soupImg}
        subText={categoryTexts.soup}
      />
    </div>
  );
};

export default OurMenu;
