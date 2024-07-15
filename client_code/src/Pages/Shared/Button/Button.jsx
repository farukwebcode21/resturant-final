const Button = ({ name }) => {
  return (
    <div className="flex justify-center items-center">
      <button className="btn  btn-outline border-0 border-b-2 uppercase hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
