"use server";

import { revalidatePath } from "next/cache";
import user from "../models/user.model";
import { connectToDB } from "../mongoose";

interface IUpdateUser {
  userId: string;
  name: string;
  username: string;
  bio: string;
  path: string;
}

export async function updateUser({
  userId,
  name,
  username,
  bio,
  path,
}: IUpdateUser): Promise<void> {
  await connectToDB();

  console.log(userId);

  try {
    await user.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLocaleLowerCase(),
        name,
        bio,
        onBoarding: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error) {}
}
