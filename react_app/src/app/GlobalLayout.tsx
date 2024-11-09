'use client';
import { useRouter } from 'next/navigation';
import { FC, ReactElement } from 'react';
import './GlobalLayout.css';
import { NavigationMenu } from '../components/NavigationMenu';
import { Button } from '../components/Button';

type Props = {
  children: ReactElement | ReactElement[];
};

export const GlobalLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <NavigationMenu />
      <div className="pt-16">
        <div className="flex justify-center space-x-4 p-4">
          <Button onClick={() => router.push('/')}>Home</Button>
          <Button onClick={() => router.push('/livres')}>Books</Button>
          <Button onClick={() => router.push('/auteurs')}>Authors</Button>
        </div>
        {children}
      </div>
    </>
  );
};