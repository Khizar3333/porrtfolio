import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homepage from '@/components/Homepage'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Me from '@/components/Me'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
         <Homepage/>
         <Portfolio/>
         <Experience/>
         <Me/>
         <Contact/>
  </div>

  )
}
