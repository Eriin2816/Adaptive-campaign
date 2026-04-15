import Image from "next/image";

export default function FooterCampaign() {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand_assets/Adaptive.png"
              alt="Adaptive AI Business Automations"
              width={120}
              height={36}
              className="h-[72px] w-auto object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-brand-sky/50">
            <span>15301 Ventura Blvd Suite A227-U1, Sherman Oaks, CA 91403</span>
            <a href="tel:3237818600" className="hover:text-brand-cyan transition-colors duration-200">
              (323) 781-8600
            </a>
            <a href="mailto:steve@adaptiveautomate.com" className="hover:text-brand-cyan transition-colors duration-200">
              steve@adaptiveautomate.com
            </a>
          </div>

          <p className="text-xs text-brand-sky/30">
            &copy; {new Date().getFullYear()} Adaptive AI Business Automations
          </p>
        </div>
      </div>
    </footer>
  );
}
