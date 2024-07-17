import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../Shared/Button/Button";

const MenuCategory = ({ items, title, coverImage, subText }) => {
  return (
    <div className="my-14">
      {title && <Cover img={coverImage} title={title} subTitle={subText} />}
      <div className="grid md:grid-cols-2 gap-10 my-10 px-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <Button name={"Order Favorite Food"} />
      </Link>
    </div>
  );
};

export default MenuCategory;
