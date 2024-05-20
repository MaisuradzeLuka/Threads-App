"use client";

//prettier-ignore
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/lib/validation";
import Image from "next/image";

interface IUserDetails {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountDetails = () => {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      name: "",
      photo_url: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof userSchema>) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 rounded-md px-12 py-10  bg-dark-2"
      >
        <FormField
          control={form.control}
          name="photo_url"
          render={({ field }) => (
            <FormItem className="flex gap-2 items-center">
              <FormLabel className="text-xl font-medium">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt={field.name}
                    width={96}
                    height={96}
                    priority
                  />
                ) : (
                  <Image
                    src="/assets/profile.svg"
                    alt="profile_icon"
                    width={24}
                    height={24}
                  />
                )}
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  className="bg-profile-image"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 ">
              <FormLabel className="text-xl font-medium">Name</FormLabel>
              <FormControl>
                <Input type="text" className="bg-profile-input" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 ">
              <FormLabel className="text-xl font-medium">UsernName</FormLabel>
              <FormControl>
                <Input type="text" className="bg-profile-input" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 ">
              <FormLabel className="text-xl font-medium">Bio</FormLabel>
              <FormControl>
                <Textarea className="bg-profile-input" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AccountDetails;
