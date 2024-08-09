import { motion } from "framer-motion";
import MenuItem from "./menu-item";

type MenuContentProps = {
  links: Array<{ title: string; href: string }>;
  onTransitionComplete: () => void;
};

export default function MenuContent({
  links,
  onTransitionComplete,
}: MenuContentProps) {
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="open"
      exit="initial"
      className="flex h-full flex-col items-center justify-center gap-8"
    >
      {links.map((link, index) => (
        <div key={index} className="overflow-hidden">
          <MenuItem
            href={link.href}
            title={link.title}
            onTransitionComplete={onTransitionComplete}
          />
        </div>
      ))}
    </motion.div>
  );
}
