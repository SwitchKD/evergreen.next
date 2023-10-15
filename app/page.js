'use client'
import Top from './component/top'
import Hero from './component/hero'
import './home.css'
import Info from './component/info'

export default function Home() {

  return (
    <>
    <div>
    <Hero/>
    <Info/>
    <Top/>
    </div>
    </>
  )
}
