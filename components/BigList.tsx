import Link from 'next/link';
import React, { ReactNode } from 'react';

import classes from './BigList.module.scss';

const BigList = ({
  items,
  path,
  children,
}: {
  items: Array<{ name: string; slug: string }>;
  path: string;
  children?: ReactNode;
}) => (
  <ul className={classes.list}>
    {children}
    {items.map((item) => (
      <li key={item.slug}>
        <Link href={`${path}/${item.slug}`} key={item.slug}>
          <a className="mb-2 block">{item.name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default BigList;
