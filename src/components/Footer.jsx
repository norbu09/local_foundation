import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#training">Training</NavLink>
              <NavLink href="#join-us">Join us</NavLink>
            </div>
          </nav>
        </div>
        <div className="border-t border-slate-400/10 py-10">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} local.foundation
          </p>
        </div>
      </Container>
    </footer>
  )
}
