"use client";
import Login from "./Login/page";
import { useState } from "react";

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

export default function Home() {
  const [isAuthorised, setIsAuthorised] = useState(false);

  return <div>{isAuthorised ? <></> : <Login />}</div>;
}
