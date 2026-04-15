import NavbarCampaign from "@/components/campaign/NavbarCampaign";
import HeroCampaign from "@/components/campaign/HeroCampaign";
import ValueBar from "@/components/campaign/ValueBar";
import ProblemSection from "@/components/campaign/ProblemSection";
import TrainingBenefits from "@/components/campaign/TrainingBenefits";
import TrialSection from "@/components/campaign/TrialSection";
import ProcessSection from "@/components/campaign/ProcessSection";
import RegistrationForm from "@/components/campaign/RegistrationForm";
import FAQCampaign from "@/components/campaign/FAQCampaign";
import FinalCTACampaign from "@/components/campaign/FinalCTACampaign";
import FooterCampaign from "@/components/campaign/FooterCampaign";
import StickyMobileCTA from "@/components/campaign/StickyMobileCTA";

export default function CampaignPage() {
  return (
    <>
      <NavbarCampaign />

      <main>
        {/* 1. Hero — headline, date, urgency, CRM mockup */}
        <HeroCampaign />

        {/* 2. Value bar — 4 key trust anchors */}
        <ValueBar />

        {/* 3. Problem section — pain points */}
        <ProblemSection />

        {/* 4. Training benefits — what they'll learn */}
        <TrainingBenefits />

        {/* 5. 60-Day free trial section */}
        <TrialSection />

        {/* 6. Simple 4-step process */}
        <ProcessSection />

        {/* 9. Registration / Contact form */}
        <RegistrationForm />

        {/* 10. FAQ */}
        <FAQCampaign />

        {/* 11. Final CTA */}
        <FinalCTACampaign />
      </main>

      <FooterCampaign />

      {/* Sticky mobile CTA — shows after scroll */}
      <StickyMobileCTA />
    </>
  );
}
