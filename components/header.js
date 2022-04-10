import Link from 'next/link'
import { WEB_NAME } from '../lib/constants'

export default function Header() {
  return (
    <h4 className="text-xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">cd ~</a>
      </Link>
    </h4>
  )
}
