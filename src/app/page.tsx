'use client'

import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
 
export default function Page() {
  const pathname = usePathname()
  return (
    <main>
      <h2>Hello from mrpablobiz. Check out our&nbsp;
        <a href="https://haha.business" target="_blank">affiliate</a>
      </h2>
      <Link href="/dashboard">Dashboard</Link>
      <Image
        src="/business.jpg"
        alt="business man"
        width={300}
        height={450}
      />
      <div>{pathname}</div>
    </main>
  )
}