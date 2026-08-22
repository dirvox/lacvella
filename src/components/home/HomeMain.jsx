import React from 'react'
import Hero from './Hero'
import ProductSection from './ProductSection'
import TrendingSection from './TrendingSection'
import ServicesMenuSection from './ServicesMenuSection'
import TransformationSection from './TransformationSection'
import HowItWorksSection from './HowItWorksSection'
import SocialProofSection from './SocialProofSection'
import FAQSection from './FAQSection'
import ImageScrollSection from './ImageScrollSection'

const HomeMain = () => {
  return (
    <div>
        <Hero/>
        <ImageScrollSection/>
        <TrendingSection/>
        <ProductSection/>
        <ServicesMenuSection/>
        <TransformationSection/>
        <HowItWorksSection/>
        <SocialProofSection/>
        <FAQSection/>
        
    </div>
  )
}

export default HomeMain