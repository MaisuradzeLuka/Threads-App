import AccountDetails from "@/components/forms/AccountDetails";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username ?? "",
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
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
            ...userData,
          }}
          btnTitle="title"
        />
      </div>
    </section>
  );
};

export default page;
