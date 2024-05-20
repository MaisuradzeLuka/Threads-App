import * as z from "zod";

export const userSchema = z.object({
  photo_url: z.string().url(),
  name: z.string().min(3),
  username: z.string().min(3),
  bio: z.string(),
});
