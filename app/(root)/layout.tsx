import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Leftbar from "@/components/shared/Leftbar";
import Rightbar from "@/components/shared/Rightbar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads App",
  description: "Threads app clone with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex">
            <Leftbar />

            <section>
              <div>{children}</div>
            </section>

            <Rightbar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
