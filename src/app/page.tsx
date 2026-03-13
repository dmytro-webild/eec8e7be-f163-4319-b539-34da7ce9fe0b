"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Zap, Sparkles, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLarge"
      background="blurBottom"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="DR Digital Studios"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Start Your Project",            href: "contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="DR Digital Studios"
          description="Built to Outperform"
          tag="Modern Web Design Agency"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-modern-web-design-agency-office-enviro-1773365538460-00a5a14d.png"
          imageAlt="DR Digital Studios workspace"
          imagePosition="right"
          mediaAnimation="slide-up"
          buttons={[
            { text: "View Portfolio", href: "portfolio" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Services"
          description="Modern, performance-driven websites for small businesses."
          tag="What We Offer"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Web Design",              description: "Clean, modern, mobile responsive designs that captivate your audience and drive engagement.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-web-1773365537341-5355d884.png?_wi=1"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-web-1773365537341-5355d884.png?_wi=2"
              }
            },
            {
              id: 2,
              title: "Business Website Builds",              description: "Tailored solutions for small businesses that convert visitors into customers.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-bus-1773365537041-7e528a04.png?_wi=1"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-bus-1773365537041-7e528a04.png?_wi=2"
              }
            },
            {
              id: 3,
              title: "Performance & SEO",              description: "Fast, optimized, search-friendly websites that rank and perform.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-per-1773365536740-93da0ca6.png?_wi=1"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-per-1773365536740-93da0ca6.png?_wi=2"
              }
            },
            {
              id: 4,
              title: "Mobile Responsive Sites",              description: "Perfect on phones, tablets, and desktops. Works everywhere, every time.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-mob-1773365537786-5cdf2d63.png?_wi=1"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-icon-or-illustration-representing-mob-1773365537786-5cdf2d63.png?_wi=2"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <BlogCardTwo
          blogs={[
            {
              id: "1",              category: "Web Design",              title: "Barber Shop – Full Website",              excerpt: "Complete website redesign and development for a premium barber shop, featuring appointment booking integration and modern online presence.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-beautiful-modern-barber-shop-website-d-1773365539232-7631437c.png",              imageAlt: "Barber Shop Website Design",              authorName: "DR Digital Studios",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-modern-web-design-agency-office-enviro-1773365538460-00a5a14d.png",              date: "2025"
            },
            {
              id: "2",              category: "Redesign",              title: "Landscaping Co. – Homepage Redesign",              excerpt: "Fresh homepage redesign showcasing portfolio work, service offerings, and customer testimonials for a growing landscaping company.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-stunning-landscaping-company-website-r-1773365578199-ace3a362.png",              imageAlt: "Landscaping Company Redesign",              authorName: "DR Digital Studios",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-modern-web-design-agency-office-enviro-1773365538460-00a5a14d.png",              date: "2025"
            },
            {
              id: "3",              category: "Web Design",              title: "Cafe – Online Menu & Booking",              excerpt: "Modern cafe website with integrated online menu system and seamless table reservation booking for improved customer experience.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-modern-cafe-website-with-integrated-on-1773365537896-04165d2c.png",              imageAlt: "Cafe Website with Menu & Booking",              authorName: "DR Digital Studios",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-modern-web-design-agency-office-enviro-1773365538460-00a5a14d.png",              date: "2025"
            }
          ]}
          title="Our Work"
          description="Showcase of our best projects and client transformations."
          tag="Portfolio"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          buttons={[
            { text: "See Full Portfolio", href: "#" }
          ]}
          buttonAnimation="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "We craft websites that don't just look good — they " },
            { type: "text", content: "perform" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to outperform online?"
          description="Let's discuss your project and how we can help your business thrive. Fill out the form and we'll get back to you within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "website", type: "text", placeholder: "Website / Business", required: false }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your project...",            rows: 5,
            required: true
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/a-professional-contact-form-background-i-1773365537971-b755f0a5.png"
          imageAlt="DR Digital Studios team"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Arno4lKGvXAkAyE7CXONX7CpOY/an-expansive-footer-background-image-sho-1773365540089-c69319fc.png"
          imageAlt="DR Digital Studios - Built to Outperform"
          logoText="DR Digital Studios"
          copyrightText="© 2026 DR Digital Studios – Built to Outperform"
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Web Design", href: "#services" },
                { label: "Business Websites", href: "#services" },
                { label: "Performance & SEO", href: "#services" },
                { label: "Mobile Responsive", href: "#services" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "TikTok", href: "https://tiktok.com" },
                { label: "Email", href: "mailto:hello@drstudios.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}