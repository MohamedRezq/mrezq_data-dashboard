import Image from 'next/image'
import { Inter } from 'next/font/google'
import FormLogin from '@/components/molecules/FormLogin/FormLogin'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
      <FormLogin />
    </main>
  )
}
