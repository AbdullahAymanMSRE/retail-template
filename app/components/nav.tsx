"use client";

import logoImg from "@/assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const links = [
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Solutions",
      href: "/solutions",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Token",
      href: "/token",
    },
    {
      name: "Developer",
      href: "/developers",
    },
    {
      name: "Resource",
      href: "/resource",
    },
  ];

  const lang = "English";

  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="main-nav">
      <Image className="logo" src={logoImg} alt="logo" />
      <div className={"nav-contents " + (navOpen ? "open " : "")}>
        <span className="close-btn" onClick={() => setNavOpen(false)}>
          X
        </span>
        <div className="links">
          <ul>
            {links.map((l) => (
              <li key={l.name}>
                <Link href={l.href}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="btns">
          <span className="lang">{lang}</span>
          <div>
            <Link href="/sign-in" className="btn deflated">
              Sign In
            </Link>
            <Link href="create-account" className="btn ">
              Create an account
            </Link>
          </div>
        </div>
      </div>
      <div className="burger" onClick={() => setNavOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
