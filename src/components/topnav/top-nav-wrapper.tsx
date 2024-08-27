import { auth } from "@clerk/nextjs/server";
import TopNav from "./top-nav";

const defaultMenuLinks = [
  { title: "About", href: "/about" },
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
  { title: "Login", href: "/login" },
];

const authenticatedMenuLinks = [
  ...defaultMenuLinks.filter((link) => link.title !== "Login"),
  { title: "Dashboard", href: "/dashboard" },
  { title: "Logout", href: "/" },
];

export default function TopNavWrapper() {
  const { userId } = auth();
  const isAuthenticated = !!userId;
  const menuLinks = isAuthenticated ? authenticatedMenuLinks : defaultMenuLinks;

  return <TopNav menuLinks={menuLinks} isAuthenticated={isAuthenticated} />;
}
