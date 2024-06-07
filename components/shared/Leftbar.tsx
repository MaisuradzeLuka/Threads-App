"use client";

import Link from "next/link";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

const Leftbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="hidden flex-col justify-between bg-dark-4 text-white px-5 py-7 h-screen md:flex">
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

      <div className="flex items-center justify-center">
        <div className="hidden md:block">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </section>
  );
};

export default Leftbar;
