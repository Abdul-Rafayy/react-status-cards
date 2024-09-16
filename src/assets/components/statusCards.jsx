import { useEffect, useRef, useState } from "react";
import Card from "./card";

function StatusCard() {
  const [status, setStatus] = useState([]);
  const [txt, setTxt] = useState("ABC");
  const [age, setAge] = useState(11);
  const [roll, setRoll] = useState(123456);
  const [fn, setFn] = useState("XYZ");
  const [bg, setBg] = useState("#000000");
  const [txtColor, setTxtColor] = useState("#ffffff");

  const handleOnClick = () => {
    const obj = {
      txt,
      age,
      roll,
      fn,
      bg,
      txtColor,
      createdAt: Date.now(),
    };

    setStatus([...status, obj]);
    console.log(obj);
  };

  const onRemove = (createdAt) => {
    setStatus([...status.filter((data) => data.createdAt !== createdAt)]);
  };
  return (
    <>
    <div className="container mx-auto flex justify-center font-abc">
      <div className="my-4 text-justify">
        <label>
          Name 
          <input
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            className="w-60 p-1 border rounded-md mx-4"
            type="text"
            placeholder="Add Text"
          />
        </label>
        <label>
          FatherName
          <input
            value={fn}
            onChange={(e) => setFn(e.target.value)}
            className="w-60 p-1 border rounded-md mx-4"
            type="text"
            placeholder="Add Text"
          />
        </label>
        <label>
          RollNumber
          <input
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            className="w-60 p-1 border rounded-md mx-4"
            type="number"
            placeholder="Add Roll"
          />
        </label><br/><br/>
        <label>
          Age 
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-60 p-1 border rounded-md mx-4"
            type="number"
            placeholder="Add Age"
          />
        </label>
        <label>
          BgColor
          <input
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            className={`w-60 p-1 border rounded-md mx-4`}
            type="color"
            placeholder="Select Bg Color"
          />
        </label>
        <label>
          TextColor
          <input
            value={txtColor}
            onChange={(e) => setTxtColor(e.target.value)}
            className={`w-60 ] p-1 border rounded-md mx-4`}
            type="color"
            placeholder="Select Text Color"
          />
        </label>
        <button
          onClick={handleOnClick}
          className="p-1 bg-slate-900 font-semibold border text-white px-3 rounded-md hover:bg-white hover:font-bold hover:text-black transition-all duration-200 "
        >
          Add
        </button>
      </div>

    </div>
          <div className="flex flex-wrap justify-center gap-2">
          {status.map((data) => (
            <Card removeCard={onRemove} key={data.createdAt} data={data} />
          ))}
        </div>
        </>
  );
}

export default StatusCard;