"use server";

import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import user from "../models/user.model";
import { connectToDB } from "../mongoose";

interface ICreateThread {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createThread({
  text,
  author,
  communityId,
  path,
}: ICreateThread) {
  try {
    connectToDB();

    const createdThread = await Thread.create({
      text,
      author,
      communityId,
    });

    await user.findByIdAndUpdate(author, {
      $push: { threads: createdThread._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}
