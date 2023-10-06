'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
    <button type="button" onClick={() => router.push('/register')}>
      registrarme
    </button>
    <button type="button" onClick={() => router.push('/login')}>
      login
    </button>
    </main>
  )
}
