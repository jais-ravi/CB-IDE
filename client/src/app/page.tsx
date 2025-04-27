import React from 'react'
import Footer from '@/components/landing/ Footer'
import FAQ from '@/components/landing/FAQ'
import Features from '@/components/landing/Features'
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import HeroSection from '@/components/landing/HeroSection'
import HowItWorks from '@/components/landing/HowItWorks'
import LiveDemo from '@/components/landing/LiveDemo'
import Pricing from '@/components/landing/Pricing'
import TargetAudiences from '@/components/landing/TargetAudiences'


const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <TargetAudiences/>
        <LiveDemo/>
        <Pricing/>
        <FAQ/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default page