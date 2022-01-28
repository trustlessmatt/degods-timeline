const Card = (props) => {
  return (
    <div className="container mx-auto max-w-lg block">
      <div className="m-5 text-left bg-white text-black font-medium px-6 py-3 rounded-lg hover:shadow-lg ease-in-out duration-300">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
