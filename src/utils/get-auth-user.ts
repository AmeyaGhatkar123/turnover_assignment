"use server";

import { redirect } from "next/navigation";
import { createAsyncCaller } from "~/app/api/trpc/trpc-router";

export const getAuthUser = async ({
  shouldRedirect = false,
}: {
  shouldRedirect: boolean;
}) => {
  const caller = await createAsyncCaller();

  return caller
    .getUser(undefined)
    .then((result) => result.data.user)
    .catch((e) => {
      if (e.code === "UNAUTHORIZED" && shouldRedirect) {
        redirect("/Login");
      }

      return null;
    });
};
