import * as z from "zod";

export const userSchema = z.object({
  // photo_url: z.string().url().optional(),
  name: z.string().min(3),
  username: z.string().min(3),
  bio: z.string(),
});

export const threadSchema = z.object({
  thread: z.string().min(3, { message: "Minimum 3 letters" }),
  accountId: z.string(),
});

export const commentSchema = z.object({
  thread: z.string().min(3, { message: "Minimum 3 letters" }),
});
