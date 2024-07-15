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
  const soups = menu.filter((item) => item.category === "soup");
  const desserets = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  const paragrapText = (
    <p className="capitalize">
      Lorem Ipsum has been the industry’s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  );

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our Menu"}
        subTitle={"Would you like to try a dish?"}
      />
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      <MenuCategory
        items={desserets}
        title={"Desserts"}
        coverImage={desertImg}
        subText={paragrapText}
      />
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImage={pizzaImg}
        subText={paragrapText}
      />
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImage={saladImg}
        subText={paragrapText}
      />
      <MenuCategory
        items={soups}
        title={"soup"}
        coverImage={soupImg}
        subText={paragrapText}
      />
    </div>
  );
};

export default OurMenu;
