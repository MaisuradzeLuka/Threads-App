"use client";

import Link from "next/link";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Leftbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="bg-dark-4 text-white px-5 py-7 h-screen hidden md:block">
      <div className="flex flex-col items-start gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex items-center gap-2 px-4 py-3 text-md w-full ${
                isActive ? " bg-primary-500 rounded-lg" : ""
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="hidden lg:inline">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Leftbar;
