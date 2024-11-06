import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

export const LinkComponent: FC<Props> = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
};