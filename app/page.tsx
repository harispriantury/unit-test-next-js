/* eslint-disable react/no-unescaped-entities */

import Hero from './components/home/hero'
import Fitur from './components/home/fitur'
import About from './components/home/about'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Fitur />
      <About />
    </main >
  )
}
