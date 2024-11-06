import React, { FC, ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${props.className}`}
    >
      {children}
    </button>
  );
};