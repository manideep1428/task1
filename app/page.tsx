'use client'
import Footer from "@/components/Footer"
import Header from "@/components/Hero"
import About from "@/components/About"
import Slider from "@/components/CardSlider"

export default function App() {
  return (
    <div className="flex flex-col justify-evenly gap-6">
      <Header/>
        <About/>
        <Slider/>
      <Footer/>
    </div>
  )
}