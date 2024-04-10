"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Header from "./_components/Header";
import Offers from "./_components/Offers";
import { useEffect, useState } from "react";
import Login from "./Login/page";

export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const [isAuthorised, setIsAuthorised] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // const res = api.post.hello({ text: "from tRPC" });
    // console.log(res);
  }, []);

  return <div>{isAuthorised ? <></> : <Login />}</div>;
}

// async function CrudShowcase() {
//   // const latestPost = await api.post.getLatest();

//   return (

//   );
// }
