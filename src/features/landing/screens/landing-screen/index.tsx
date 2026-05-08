import { ContactUs } from './parts/contact-us'
import { CtaSection } from './parts/cta-section'
import { FeaturesSection } from './parts/features-section'
import { Footer } from './parts/footer'
import { Hackathon } from './parts/hackathon'
import { HelpUs } from './parts/help-us'
import { HeroSection } from './parts/hero-section'
import { HowItWorks } from './parts/how-it-works'
import { Marketplace } from './parts/marketplace'
import { MeetTheTeam } from './parts/meet-the-team'
import { NavBar } from './parts/nav-bar'
import { OurPartners } from './parts/our-partners'
import { WhyCheckmate } from './parts/why-checkmate'

export function LandingScreen() {
  return (
    <div className="bg-cream-background flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
      <WhyCheckmate />
      <FeaturesSection />
      <Marketplace />
      <HowItWorks />
      <MeetTheTeam />
      <HelpUs />
      <OurPartners />
      <Hackathon />
      <CtaSection />
      <ContactUs />
      <Footer />
    </div>
  )
}
