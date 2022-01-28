import React from "react";

const Card = (props) => {
  return (
    <div className="container m-8 text-left bg-white text-black rounded-lg hover:shadow-lg ease-in-out duration-300">
      <div className="text-lg font-lg px-6 py-3">
        {props.date}
      </div>
      <div className="font-medium italic px-6 py-3">
        {props.text}
      </div>
      <div className="font-sm px-5 py-3">
        {props.image}
      </div>
    </div>
  );
};

export default Card;
