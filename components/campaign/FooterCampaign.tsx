import Image from "next/image";

export default function FooterCampaign() {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/brand_assets/Adaptive.png"
              alt="Adaptive AI Business Automations"
              width={200}
              height={60}
              className="h-[102px] w-auto object-contain"
            />
          </div>

          {/* Addresses */}
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-brand-sky/50">
            <div className="space-y-0.5">
              <div className="text-brand-sky/70 font-semibold text-[11px] uppercase tracking-widest mb-1">Sherman Oaks</div>
              <div>15301 Ventura Blvd Suite A227-U1</div>
              <div>Sherman Oaks, CA 91403</div>
            </div>
            <div className="hidden sm:block w-px bg-white/8 self-stretch" />
            <div className="space-y-0.5">
              <div className="text-brand-sky/70 font-semibold text-[11px] uppercase tracking-widest mb-1">Century Park</div>
              <div>1925 Century Park East Suite 1700</div>
              <div>Los Angeles, CA 90067, United States</div>
            </div>
          </div>

          {/* Contact + copyright */}
          <div className="flex flex-col items-start md:items-end gap-2 text-xs text-brand-sky/50">
            <a href="tel:3234982131" className="hover:text-brand-cyan transition-colors duration-200">
              (323) 498-2131
            </a>
            <a href="mailto:steve@adaptiveautomate.com" className="hover:text-brand-cyan transition-colors duration-200">
              steve@adaptiveautomate.com
            </a>
            <p className="text-brand-sky/30 mt-1">
              &copy; {new Date().getFullYear()} Adaptive AI Business Automations
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
