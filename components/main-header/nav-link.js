'use client'

import Link from "next/link";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

const NavLink = (props) => {
  const { href, children } = props;
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link}
    >
      {children}
    </Link>
  );
};

export default NavLink;
