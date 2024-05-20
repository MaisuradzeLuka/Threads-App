import AccountDetails from "@/components/forms/AccountDetails";

const page = () => {
  return (
    <section className="w-full h-screen bg-dark-1 pt-20">
      <div className="max-w-[900px] flex flex-col gap-8 text-white mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4">Onboarding</h1>
          <p className="text-xl font-medium">Complete making the account</p>
        </div>

        <AccountDetails />
      </div>
    </section>
  );
};

export default page;
