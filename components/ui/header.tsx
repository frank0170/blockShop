import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import Logo2 from '@/public/images/logob2.png'

export default function Header() {
  return (
    <header className="absolute top-2 md:top-6 w-full z-30">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between h-14 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg px-3">

            {/* Logo */}
            <div className="shrink-0">
              <Image src={Logo2} height={20} alt="Logo" />
            </div>

            {/* Navigatia desktop */}
            <div className="flex-grow">
              <nav className="flex items-center justify-center">
                <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="/">Home</Link>
                <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="/">Shop</Link>
                <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="/">Oferte</Link>
                <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="/">Blog</Link>
              </nav>
            </div>

            {/* Contact */}
       
              <ul className="flex justify-center">
                <li className="ml-1">
                  <Link className="btn-sm text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/request-demo">Contact</Link>
                </li>
              </ul>
      

          </div>
        </div>
      </div>
    </header>
  )
}