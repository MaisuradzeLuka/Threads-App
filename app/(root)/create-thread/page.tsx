import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userData = await fetchUser(user.id);

  if (!userData?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className="text-3xl font-semibold mb-8">Create thread</h1>

      <PostThread userId={userData._id} />
    </>
  );
};

export default page;
