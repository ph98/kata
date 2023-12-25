
import FeaturesSection from './components/featuresSection'
import HeroSection from './components/heroSection'
import LogoSection from './components/logosSection'
import NewsFeedSection from './components/newsFeedSection'
import PartnershipSection from './components/partnershipSection'
import TestimonialSection from './components/testimonialSection'

import styles from './page.module.css'

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
