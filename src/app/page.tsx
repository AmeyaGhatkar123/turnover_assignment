"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { api } from "~/trpc/server";
import Header from "./_components/Header";
import Offers from "./_components/Offers";
import Login from "./Login/page";
import { GET } from "./api/trpc/[trpc]/route";

import { useEffect, useState } from "react";
import { trpc } from "~/utils/trpc";

import { faker } from "@faker-js/faker";
import { prisma } from "../lib/prisma";

// export function main() {
//   Array.from({ length: 100 }).map(async (_, i) => {
//     await prisma.interests.create({
//       data: {
//         id: faker.string.uuid(),
//         interest: faker.commerce.productName(),
//       },
//     });
//   });
// }

interface Interests {
  id: string;
  interest: string;
}

export default function Home() {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const router = useRouter();

  return <div>{isAuthorised ? <></> : <Login />}</div>;
}
