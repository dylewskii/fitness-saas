"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuToggle } from "./menu-toggle";
import Logo from "./logo";
import MenuContent from "./menu-content";
import DashboardLink from "./dashboard-link";

type MenuLink = {
  title: string;
  href: string;
};

type TopNavProps = {
  className?: string;
  menuLinks: MenuLink[];
  isAuthenticated: boolean;
};

export default function TopNav({
  className,
  menuLinks,
  isAuthenticated,
}: TopNavProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    if (menuOpen) {
      root?.classList.add("overflow-hidden");
    } else {
      root?.classList.remove("overflow-hidden");
    }

    return () => {
      root?.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      <div className="flex items-center gap-4">
        <span className="hidden md:block">
          {isAuthenticated && <DashboardLink />}
        </span>

        <MenuToggle isOpen={menuOpen} onClick={handleMenuClick} />
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-0 top-0 z-50 h-screen w-full origin-top bg-secondary px-12 py-4 text-black"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <Logo color="black" />
                  <MenuToggle isOpen={true} onClick={handleMenuClick} />
                </div>
                <MenuContent
                  links={menuLinks}
                  onLinkClick={closeMenu}
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
