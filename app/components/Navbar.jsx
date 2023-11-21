
import Image from 'next/image'
import Link from 'next/link'
import Logo from './helpdesk-logo.jpg'

export default function Navbar() {
  return (
    <nav>
      <Image 
        src={Logo}
        alt='Next Helpdesk logo'
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h1>NEXT Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
