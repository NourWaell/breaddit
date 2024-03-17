import { VoteType } from "@prisma/client";

export type CachedPost = {
  id: string;
  title: string;
  content: string;
  authorUserName: string;
  currentVote: VoteType | null;
  createdAt: Date;
};
