'use client';
import { useRouter } from 'next/navigation';
import { FC, ReactElement } from 'react';
import './GlobalLayout.css';
import { NavigationMenu } from '../components/NavigationMenu';

type Props = {
  children: ReactElement | ReactElement[];
};

export const GlobalLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <NavigationMenu />
      <div>
        {children}
      </div>
    </>
  );
};
