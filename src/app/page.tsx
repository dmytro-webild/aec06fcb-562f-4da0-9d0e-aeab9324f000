"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Zap, Crown, Mail, Shield, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="mediumSizeLargeTitles"
      background="floatingGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Insights", id: "insights" },
            { name: "Products", id: "products" },
            { name: "Services", id: "services" },
            { name: "Newsletter", id: "newsletter" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AUREUS"
          bottomLeftText="Knowledge Studio"
          bottomRightText="hello@aureus.studio"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="AUREUS"
          description="Thought leadership insights, digital products, and strategic consulting for the modern enterprise."
          buttons={[
            { text: "Explore Insights", href: "#insights" },
            { text: "Schedule Consultation", href: "#contact" }
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/view-modern-photorealistic-lamp_23-2151038895.jpg",              imageAlt: "Dark academic library workspace"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/confident-business-people-standing-together_53876-98344.jpg",              imageAlt: "Thought leadership executive environment"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-desk-dark-concept-with-copy-space_23-2148459467.jpg",              imageAlt: "Futuristic knowledge studio interface"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          ariaLabel="Hero carousel section with brand presentation"
        />
      </div>

      <div id="insights" data-section="insights">
        <MetricSplitMediaAbout
          tag="Our Expertise"
          tagIcon={Sparkles}
          title="Redefining Strategic Knowledge Leadership"
          description="At Aureus, we blend deep market research with innovative methodologies to deliver transformative insights. Our thought-leadership platform combines proprietary research, consulting excellence, and digital innovation to empower forward-thinking enterprises."
          metrics={[
            { value: "50+", title: "Strategic Insights Published" },
            { value: "300+", title: "Enterprise Clients Served" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/pov-diverse-multi-ethnic-businesspeople-sitting-conference-table-discussing-company-strategy_482257-11009.jpg"
          imageAlt="Strategic consulting team collaboration"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Our Service Phases"
          description="A structured approach to delivering transformative strategic insights and digital solutions."
          tag="How We Work"
          tagIcon={Zap}
          features={[
            {
              id: 1,
              tag: "Discovery",              title: "Market Intelligence",              subtitle: "Deep research foundation",              description: "We conduct comprehensive market analysis, competitive intelligence gathering, and stakeholder interviews to understand your strategic landscape and opportunities.",              imageSrc: "http://img.b2bpic.net/free-photo/empty-dark-office-multinational-company-showcases-charts-insight-night-forecast-data-display_482257-136491.jpg",              imageAlt: "Market research and analysis",              buttons: [{ text: "Learn More", href: "#services" }]
            },
            {
              id: 2,
              tag: "Strategy",              title: "Strategic Advisory",              subtitle: "Tailored consulting solutions",              description: "Our expert consultants develop bespoke strategic frameworks and implementation roadmaps tailored to your enterprise goals and market dynamics.",              imageSrc: "http://img.b2bpic.net/free-photo/businessman-holding-laptop-with-financial-ghraphics-while-diverse-employees-talking_482257-6517.jpg",              imageAlt: "Strategic consulting workshop",              buttons: [{ text: "Learn More", href: "#services" }]
            },
            {
              id: 3,
              tag: "Delivery",              title: "Insights Publication",              subtitle: "Premium content creation",              description: "We publish thought-leadership content, executive briefings, and proprietary research that establishes your brand as an industry authority.",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-blogger-recording-station_1303-21990.jpg",              imageAlt: "Content creation and research",              buttons: [{ text: "Learn More", href: "#services" }]
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Digital Products & Offerings"
          description="Premium research, consulting frameworks, and knowledge platforms designed for enterprise leaders."
          tag="Our Solutions"
          tagIcon={Crown}
          products={[
            {
              id: "1",              brand: "Aureus Research",              name: "Strategic Insights Platform",              price: "$2,499",              rating: 5,
              reviewCount: "127",              imageSrc: "http://img.b2bpic.net/free-photo/collection-quail-eggs-near-feathers-can_23-2148073846.jpg",              imageAlt: "Strategic insights platform interface"
            },
            {
              id: "2",              brand: "Aureus Advisory",              name: "Executive Consulting Package",              price: "$15,000",              rating: 5,
              reviewCount: "94",              imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-infographic-with-photo_23-2148344811.jpg",              imageAlt: "Executive consulting service offering"
            },
            {
              id: "3",              brand: "Aureus Intelligence",              name: "Market Intelligence Dashboard",              price: "$4,999",              rating: 5,
              reviewCount: "156",              imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241199.jpg",              imageAlt: "Market intelligence dashboard"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardFive
          title="Flexible Engagement Models"
          description="Choose the consulting and research partnership that aligns with your strategic needs."
          tag="Pricing"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "insight-access",              tag: "Insight Access",              tagIcon: Sparkles,
              price: "$1,999",              period: "/year",              description: "Annual access to our proprietary research library and quarterly strategic briefings.",              button: { text: "Get Started", href: "#contact" },
              featuresTitle: "What's Included:",              features: [
                "Quarterly strategic briefings",                "Access to research library",                "Monthly market updates",                "Email support"
              ]
            },
            {
              id: "strategic-advisory",              tag: "Strategic Advisory",              tagIcon: Award,
              price: "$12,000",              period: "/quarter",              description: "Dedicated advisory services with monthly consulting sessions and custom research.",              button: { text: "Schedule Call", href: "#contact" },
              featuresTitle: "What's Included:",              features: [
                "Monthly advisory sessions",                "Custom market research",                "Quarterly strategy review",                "Priority support",                "Executive briefings"
              ]
            },
            {
              id: "enterprise-partnership",              tag: "Enterprise Partnership",              tagIcon: Crown,
              price: "Custom",              period: "pricing",              description: "Bespoke consulting engagements with unlimited access to our full suite of services.",              button: { text: "Contact Sales", href: "#contact" },
              featuresTitle: "What's Included:",              features: [
                "Unlimited consulting hours",                "Proprietary research access",                "Custom platform development",                "Dedicated account team",                "Executive workshops",                "Thought leadership support"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Trusted by leading enterprises and thought leaders worldwide"
          cardTag="Proven Results"
          cardTagIcon={Shield}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-fashionable-well-dressed-man-with-beard-posing-outdoors_1328-3268.jpg",              imageAlt: "Sarah Chen"
            },
            {
              id: "2",              name: "Michael Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280722.jpg",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              name: "Dr. James Mitchell",              imageSrc: "http://img.b2bpic.net/free-photo/man-button-up-his-jacket-smiles_23-2148401389.jpg",              imageAlt: "Dr. James Mitchell"
            },
            {
              id: "4",              name: "Patricia Vance",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg",              imageAlt: "Patricia Vance"
            }
          ]}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="newsletter" data-section="newsletter">
        <ContactCTA
          tag="Stay Informed"
          tagIcon={Mail}
          title="Join Our Knowledge Community"
          description="Receive exclusive strategic insights, quarterly research briefings, and industry analysis delivered to your inbox. Join forward-thinking leaders shaping the future."
          buttons={[
            { text: "Subscribe to Newsletter", href: "mailto:subscribe@aureus.studio" },
            { text: "Learn More", href: "#insights" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="AUREUS"
          copyrightText="© 2025 Aureus. All rights reserved."
          columns={[
            {
              title: "Research",              items: [
                { label: "Strategic Insights", href: "#insights" },
                { label: "Market Intelligence", href: "#services" },
                { label: "Case Studies", href: "#products" }
              ]
            },
            {
              title: "Consulting",              items: [
                { label: "Advisory Services", href: "#services" },
                { label: "Custom Engagements", href: "#pricing" },
                { label: "Enterprise Solutions", href: "#contact" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Aureus", href: "#insights" },
                { label: "Contact Us", href: "#contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}