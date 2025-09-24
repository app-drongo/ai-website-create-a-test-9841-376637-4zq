import Hero from '@/components/sections/home/Hero'
import Pricing from '@/components/sections/home/Pricing'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      <section id="features">
        <Features />
      </section>
      </section>
      <section id="pricing">
        <Pricing />
      <section id="contact">
        <Contact />
      </section>
      </section>
    </>
  )
}
import Contact from '@/components/sections/home/Contact'
import Features from '@/components/sections/home/Features'