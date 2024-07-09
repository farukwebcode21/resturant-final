const MenuItem = ({ item }) => {
  console.log(item);
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 ">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[80px]"
        src={image}
        alt="image"
      />
      <div>
        <h3 className="uppercase text-white">{name} --------------</h3>
        <p className="text-gray-400">{recipe}</p>
      </div>
      <p className="text-yellow-600">{price}</p>
    </div>
  );
};

export default MenuItem;
