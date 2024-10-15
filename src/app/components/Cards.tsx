import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Cards = ({ children }: CardProps) => {
  return <div className="grid grid-cols-main gap-7 max-md:grid-cols-1 max-lg:grid-cols-main-mob">{children}</div>;
};

export default Cards;
