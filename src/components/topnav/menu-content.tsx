import { motion } from "framer-motion";
import MenuItem from "./menu-item";

type MenuContentProps = {
  links: Array<{ title: string; href: string }>;
};

export default function MenuContent({ links }: MenuContentProps) {
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
      className="flex h-full min-h-fit flex-col items-center justify-center gap-5 md:gap-8"
    >
      {links.map((link, index) => (
        <div key={index} className="overflow-hidden">
          <MenuItem href={link.href} title={link.title} />
        </div>
      ))}
    </motion.div>
  );
}
