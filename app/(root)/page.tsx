import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  // if (!user) return null;

  console.log(user);
  return <main>fw</main>;
}
