import React, { FC } from "react";

type Props = {
  children: string;
  name: string;
};

export const Hello: FC<Props> = ({ name, children }) => {
  return (
    <>
      <h1>Hello {name}!</h1>
      <h2>{children}</h2>
    </>
  );
};