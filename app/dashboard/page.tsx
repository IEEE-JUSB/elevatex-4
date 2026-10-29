"use server";
import { redirect } from "next/navigation";
import React from "react";
import ClientCode from "./clientCode";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  //===veryimportantDeleteLater
  // const session = {
  //   user: {
  //     id: "usr_9f8e7d6c-5b4a-4321-a123-0987654321ab",
  //     createdAt: new Date("2024-08-15T10:30:00Z"),
  //     updatedAt: new Date("2024-10-20T14:45:00Z"),
  //     email: "alex.chen@university.edu",
  //     emailVerified: true,
  //     name: "Alex Chen",
  //     image: "https://images.example.com/avatars/alex-chen.jpg",
  //     role: "student",
  //     year: "3rd Year",
  //     department: "Computer Science and Engineering",
  //     college: "School of Engineering and Applied Sciences",
  //     phone: "+1-555-019-2834",
  //   },
  // };
  if (!session?.user) redirect("/login?from=dashboard");

  return <ClientCode user={session?.user} />;
}

export default Page;
