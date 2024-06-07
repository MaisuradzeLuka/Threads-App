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

  try {
    await user.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLocaleLowerCase(),
        name,
        bio,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error) {}
}

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await user.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}
