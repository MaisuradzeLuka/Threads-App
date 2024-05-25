import AccountDetails from "@/components/forms/AccountDetails";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userData = {
    id: user.id,
    // objectId: user?._id,
    // username: user ? user?.username : user.username,
    // name: user ? user?.name : user ?? "",
    // bio: user ? user?.bio : "",
    // image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <section className="w-full h-screen bg-dark-1 pt-20">
      <div className="max-w-[900px] flex flex-col gap-8 text-white mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4">Onboarding</h1>
          <p className="text-xl font-medium">Complete making the account</p>
        </div>

        <AccountDetails
          user={{
            id: user.id,
            objectId: "ff",
            username: "gg",
            name: "luka",
            bio: "test bio",
            image: "gh",
          }}
          btnTitle="title"
        />
      </div>
    </section>
  );
};

export default page;
