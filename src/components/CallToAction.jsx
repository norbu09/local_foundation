import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function CallToAction() {
  return (
    <section
      id="join-us"
      className="relative overflow-hidden bg-lime-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div
          width={2347}
          height={1244}
          layout="fixed"
        ></div>
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            join us
          </h2>
          <p className="mt-4 text-lg tracking-tight text-black">
            Help us grow rural communities and learn how to buils long-term sustailable systems
          </p>
          <Button href="/register" color="white" className="mt-10">
            get in touch
          </Button>
        </div>
      </Container>
    </section>
  )
}
