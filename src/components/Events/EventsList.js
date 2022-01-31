// import Card from "./Card";
import { useState } from "react";
import { Chrono } from "react-chrono";
import eventData from "./eventData";
import DUST from "../Assets/DUST.jpg";

const EventsList = () => {
  // const [showDust, setShowDust] = useState(false);

  // const showDustHandler = () => {
  //   setShowDust(true);
  // };

  return (
    <div className="mx-auto max-w-screen-xl">
      <Chrono
        items={eventData}
        mode="VERTICAL_ALTERNATING"
        disableNavOnKey="true"
        hideControls="true"
        // onScrollEnd={showDustHandler}
        theme={{
          primary: "#6100FF",
          secondary: "white",
          cardBgColor: "white",
          cardForeColor: "black",
          titleColor: "black",
        }}
      />
      {/* {showDust && ( */}
      <img src={DUST} className="mx-auto py-1 max-w-xs md:max-w-md"></img>
      <div>...and now, let us begin the $DUST experiment.</div>
      {/* )} */}
    </div>
  );
};

export default EventsList;
