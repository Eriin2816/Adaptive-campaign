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
import ScrollAnimations from "@/components/campaign/ScrollAnimations";

export default function CampaignPage() {
  return (
    <>
      {/* Global scroll-triggered animation observer — runs once, watches all [data-anim] elements */}
      <ScrollAnimations />

      <NavbarCampaign />

      <main>
        <HeroCampaign />
        <ValueBar />
        <ProblemSection />
        <TrainingBenefits />
        <TrialSection />
        <ProcessSection />
        <RegistrationForm />
        <FAQCampaign />
        <FinalCTACampaign />
      </main>

      <FooterCampaign />
      <StickyMobileCTA />
    </>
  );
}
