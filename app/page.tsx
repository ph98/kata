import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/heroSection'
import TestimonialSection from './components/testimonialSection'
import PartnershipSection from './components/partnershipSection'
import FeaturesSection from './components/featuresSection'
import NewsFeedSection from './components/newsFeedSection'
import LogoSection from './components/logosSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <TestimonialSection />
      <PartnershipSection />
      <FeaturesSection />
      <NewsFeedSection />
      <LogoSection />
    </main>
  )
}
