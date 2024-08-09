"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./logo";
import { MenuToggle } from "./menu-toggle";
import MenuContent from "./menu-content";

type TopNavProps = {
  className?: string;
};

export function TopNav({ className }: TopNavProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuLinks = [
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact", href: "/contact" },
    { title: "Login", href: "/login" },
  ];

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <nav
      className={`${className} flex w-full max-w-[1920px] items-center justify-between bg-black px-12 py-4 text-white`}
    >
      <Logo />
      <div>
        <MenuToggle isOpen={menuOpen} onClick={handleMenuClick} />
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-secondary absolute left-0 top-0 z-50 h-screen w-full origin-top px-12 py-4 text-black"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <Logo color="black" />
                  <MenuToggle isOpen={true} onClick={handleMenuClick} />
                </div>
                <MenuContent
                  links={menuLinks}
                  onTransitionComplete={closeMenu}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
