import Link from 'next/link'

export default function Page() {
  return (
    <div>
      About Page
      <Link href={'/blog'}>Blog</Link>
      <div>
        <Link href={'/blog/A'}>Blog A</Link>
      </div>
      <div>
        <Link href={'/blog/B'}>Blog B</Link>
      </div>
    </div>
  )
}