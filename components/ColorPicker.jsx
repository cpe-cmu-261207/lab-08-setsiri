import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";

export default function ColorPicker(props) {
  const color = props.color;

  const { selColor, setSelColor } = useContext(PainterContext);

  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderStyle: "solid",

        //if this color is selected, show this
        //borderColor: "magenta",
        //borderWidth: "7px",
        borderColor: selColor == color ? "megenta" : "black",
        borderWidth: selColor == color ? "7px" : "2px",
        //if this color is not selected, show this
        //borderColor: "black",
        //borderWidth: "2px",
      }}
      onClick={() => {
        //set selecting color when clicked
        //your code here
        setSelColor(color);
      }}
    />
  );
}
