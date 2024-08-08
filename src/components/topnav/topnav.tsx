"use client";

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
                <MenuContent links={menuLinks} onLinkClick={handleMenuClick} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <div className="flex flex-row">
          <SignedOut>
            <SignInButton>
              <button className="flex items-center gap-2 text-lg">
                Login
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 17C6 17.3513 6 17.5269 6.01567 17.6796C6.14575 18.9474 7.0626 19.9946 8.30206 20.2911C8.45134 20.3268 8.6255 20.35 8.97368 20.3965L15.5656 21.2754C17.442 21.5256 18.3803 21.6507 19.1084 21.3611C19.7478 21.1069 20.2803 20.6407 20.6168 20.0406C21 19.357 21 18.4105 21 16.5175V7.48244C21 5.5894 21 4.64288 20.6168 3.95935C20.2803 3.35923 19.7478 2.893 19.1084 2.6388C18.3803 2.34926 17.442 2.47435 15.5656 2.72455L8.97368 3.60347C8.62546 3.6499 8.45135 3.67311 8.30206 3.70883C7.0626 4.00532 6.14575 5.05254 6.01567 6.3203C6 6.47301 6 6.64866 6 6.99996M12 7.99996L16 12M16 12L12 16M16 12H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div> */}
    </nav>
  );
}
