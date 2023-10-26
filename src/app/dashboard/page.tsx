'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <>
      <h1>Welcome the the dank memeos, Dashboard Page!</h1>
      <button onClick={() => router.push('/')}>
        nondonk memeos
      </button>
      <div>{pathname}</div>
    </>
  )
}