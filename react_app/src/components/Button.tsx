'use client';
import React, { FC } from 'react';

type Props = {
  children: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className="p-2 bg-blue-500 text-white rounded" onClick={onClick}>
      {children}
    </button>
  );
};