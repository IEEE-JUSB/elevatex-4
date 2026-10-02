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

  if(!session?.user) redirect("/login?from=dashboard");

  return (
    <ClientCode user={session?.user} />
  )
}

export default Page