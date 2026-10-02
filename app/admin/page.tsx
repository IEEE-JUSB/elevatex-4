'use server';
import { redirect } from 'next/navigation';
import React from 'react'
import ClientCode from './clientCode';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if(!session?.user || session.user.role !== "ADMIN") redirect("/login?from=nicetry");

  return (
    <ClientCode />
  )
}

export default Page