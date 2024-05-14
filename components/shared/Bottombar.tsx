"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="absolute bottom-0 bg-dark-4 flex items-start justify-between md:hidden w-full px-3 py-3">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex flex-col items-center gap-1 px-4 py-3 text-md w-full ${
              isActive ? " bg-primary-500 rounded-lg" : ""
            }`}
          >
            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
            <p className="hidden sm:inline text-white">
              {" "}
              {link.label.split(/\s+/)[0]}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Bottombar;
