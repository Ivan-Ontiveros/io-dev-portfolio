"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/skills", label: "Skills & Certifications" },
  // { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export const AppHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header>
      <div className="containerContent flex justify-between items-center">
        <Link href="/" className="navbar-brand" aria-label="Site branding">
          <span className="brand-name" aria-label="Candidate's name">
            Ivan Ontiveros
          </span>
          <span className="title">Software Engineer at Aetna Health</span>
          <span className="location">Arizona, United States</span>
        </Link>

        <button
          className="hamburger-menu lg:hidden flex items-center"
          aria-label="Toggle navigation menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <GiHamburgerMenu size={30} />
        </button>

        <nav className="text-right hidden lg:flex">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.href} className="text-lg">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Drawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        direction="right"
      >
        <DrawerTrigger />
        <DrawerContent className="p-6 min-w-[14rem]">
          <DrawerTitle>Pages</DrawerTitle>
          <DrawerClose />
          <nav>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href} className="text-lg">
                  <Link href={link.href} onClick={() => setIsDrawerOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
