import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <nav className="flex justify-between items-center bg-dark-4 text-white px-6 py-3">
      <Link href="/" className="flex gap-3">
        <Image src="/assets/logo.svg" alt="page logo" width={28} height={28} />
        <p className="text-xl font-medium">Threads</p>
      </Link>

      <div>
        <div className="block md:hidden">
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

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
