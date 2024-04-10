"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { api } from "~/trpc/server";
import Header from "./_components/Header";
import Offers from "./_components/Offers";
import { useEffect, useState } from "react";
import Login from "./Login/page";
import { GET } from "./api/trpc/[trpc]/route";

export default function Home() {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const router = useRouter();

  return <div>{isAuthorised ? <></> : <Login />}</div>;
}
