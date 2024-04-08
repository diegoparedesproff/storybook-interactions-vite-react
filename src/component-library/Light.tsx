import React from "react";

type Props = {
  /** some description to show in story for props */
  variant: "green" | "yellow" | "red";
};

/** some description to show in story for Light component */
const Light = ({ variant = "green" }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: 50,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
