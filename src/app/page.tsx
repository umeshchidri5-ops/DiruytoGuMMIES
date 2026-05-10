
'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  async function checkout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
    })

    const data = await res.json()
    window.location.href = data.url
  }

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()

    await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    alert('Subscribed!')
    setEmail('')
  }

  return (
    <main className="bg-[#f7f4ee] text-[#103d28]">
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-6xl font-black mb-6">
              Real Nutrition.
              <br />
              Real Benefits.
            </h1>

            <p className="text-xl mb-8">
              Premium plant-based multivitamin gummies for modern wellness.
            </p>

            <button
              onClick={checkout}
              className="bg-[#103d28] text-white px-8 py-4 rounded-2xl font-bold"
            >
              Buy Now
            </button>
          </div>

          <Image
            src="/hero.png"
            alt="Diruyto"
            width={800}
            height={800}
            className="rounded-3xl"
          />
        </div>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-10">
            Daily Wellness
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Immunity</h3>
              <p>Vitamin C, D3, zinc and iron support daily wellness.</p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Energy</h3>
              <p>B12 and B6 help maintain energy and metabolism.</p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Plant Based</h3>
              <p>Made with real fruit inspired ingredients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Join the Wellness Newsletter
          </h2>

          <form
            onSubmit={subscribe}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 border p-4 rounded-xl"
            />

            <button
              type="submit"
              className="bg-[#103d28] text-white px-8 py-4 rounded-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
