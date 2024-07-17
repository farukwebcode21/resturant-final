const Card = ({ item }) => {
  console.log(item);
  const { recipe, price, name, image } = item;
  return (
    <div className="card rounded-none bg-base-100 w-96 shadow-xl cursor-pointer hover:shadow-orange-800">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute bg-slate-900 right-0 mt-4 mr-4 px-2">${price}</p>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
