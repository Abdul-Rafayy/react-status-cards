import React, { useEffect, useRef, useState } from "react";

const Card = ({ data, removeCard }) => {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 0) {
        removeCard(data.createdAt);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [timer]);
  return (
    
    <div
      key={data.createdAt}
      className={`h-72 w-72 flex-col flex justify-center items-center rounded-md`}
      style={{
        backgroundColor: data.bg,
        color: data.txtColor,
      }}
    >
      <h1 className="text-3xl font-extrabold text-red-500">Status Card</h1><br/>
      <p className="text-xl font-abc">Name : {data.txt}</p>
      <p className="text-xl font-abc">Father Name : {data.fn}</p>
      <p className="text-xl font-abc">Roll No : {data.roll}</p>
      <p className="text-xl font-abc">Age : {data.age}</p>
      <p className="text-xl font-abc">Ends in {timer} s</p>
    </div>
  );
};

export default Card;