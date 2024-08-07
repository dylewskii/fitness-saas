import Link from "next/link";
import React from "react";
import Newsletter from "./newsletter";

export default function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white">
      <div className="bg-primary flex justify-between px-12 py-8">
        <div className="">
          <p>&copy;{currYear} Fitnessio</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/terms"}>Terms of Service</Link>
          <Link href={"/privacy"}>Privacy Policy</Link>
          <Link href={"/cookies"}>Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
