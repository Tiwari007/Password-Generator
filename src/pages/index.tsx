import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PasswordGenerator from './components/PasswordGenerator'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="Password generator Application By BuckyAlita" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://icons8.com/icon/112162/lock" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <PasswordGenerator />
      </main>
    </>
  )
}
