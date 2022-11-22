import React from "react";
import Colors from "./Colors/Colors";
import Interactive from "./Interactive/Interactive";
import Typography from "./Typography/Typography";

const Design = () => {
  return (
    <div>
      <h3 className="letter-spacing-3 uppercase heading">Design System</h3>
      <Colors></Colors>
      <Typography></Typography>
      <Interactive></Interactive>
    </div>
  );
};

export default Design;
