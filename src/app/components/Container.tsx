import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="flex flex-col px-4 max-w-1200 mx-auto">{children}</div>;
};

export default Container;
