'use client'
import { useRouter } from 'next/navigation'
export default function Home() {
    const router = useRouter()
  return (
    <main >
      <div>
        <p>
          <code>hola soy register</code>
        </p>
      </div>
      <button type="button" onClick={() => router.push('/')}>
      volver
    </button>
    </main>
  )
}
