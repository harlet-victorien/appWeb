import { FC } from 'react';

type PageTitleProps = {
  title: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <h1 className="text-2xl font-bold text-center my-4">{title}</h1>
);