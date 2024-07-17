const Card = ({ cardImg, content, title, cardButton }) => {
  return (
    <div className=" rounded-none bg-base-100 w-auto shadow-2xl justify-center items-center">
      <figure>
        <img className="w-[410px] h-[300px]" src={cardImg} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{title}</h2>
        <p>{content}</p>
        <div className="card-actions">
          <button className="btn  bg-gray-600 uppercase">{cardButton}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
