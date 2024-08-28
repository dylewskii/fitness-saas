"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuToggle } from "./menu-toggle";
import { useMenuState } from "~/hooks/useMenuState";
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
  const { isOpen: menuOpen, toggleMenu, closeMenu } = useMenuState();

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

        <MenuToggle isOpen={menuOpen} onClick={toggleMenu} />
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
                  <Logo color="black" closeMenu={closeMenu} />
                  <MenuToggle isOpen={true} onClick={toggleMenu} />
                </div>
                <MenuContent links={menuLinks} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
