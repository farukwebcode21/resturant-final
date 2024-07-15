import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { useMenu } from "../../../hooks/useMenu";
import Button from "../../Shared/Button/Button";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <>
      <section className="mb-4">
        <SectionTitle subHeading={"Check it Out"} heading={"From our menu"} />
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <Button name={"view full menu"} />
      </section>
    </>
  );
};

export default PopularMenu;
