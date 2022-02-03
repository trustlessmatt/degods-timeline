// import Card from "./Card";
import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import eventData from "./eventData";
import DUST from "../Assets/DUST.jpg";

const EventsList = () => {
  const [myWidth, setMyWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setMyWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <Chrono
        items={eventData}
        mode={`${(myWidth > 768) ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}`}
        disableNavOnKey="true"
        hideControls="true"
        // onScrollEnd={showDustHandler}
        scrollable={{scrollbar: true}}
        theme={{
          primary: "#6100FF",
          secondary: "white",
          cardBgColor: "white",
          cardForeColor: "black",
          titleColor: "black",
        }}
      />
      
      <br></br>
      <div>...and now, let us begin the $DUST experiment.</div>
      <img src={DUST} className="mx-auto py-1 max-w-xs md:max-w-md"></img>
      {/* )} */}
    </div>
  );
};

export default EventsList;
