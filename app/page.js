'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main >
    <button type="button" onClick={() => router.push('/register')}>
      registrarme
    </button>
    <button type="button" onClick={() => router.push('/login')}>
      login
    </button>
    </main>
  )
}
