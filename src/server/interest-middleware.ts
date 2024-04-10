import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { cookies } from "next/headers";

export const storedInterests = async () => {
  try {
    const interests = await prisma.interests.findMany();

    return { interests };
  } catch (error: any) {
    throw new TRPCError({ code: "BAD_REQUEST", message: error.message });
  }
};
