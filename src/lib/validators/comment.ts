import { z } from "zod";

export const commentValidator = z.object({
  postId: z.string(),
  text: z.string().min(1, "Comment must be at least 1 character long"),
  replyToId: z.string().optional(),
});

export type CommentRequest = z.infer<typeof commentValidator>;
