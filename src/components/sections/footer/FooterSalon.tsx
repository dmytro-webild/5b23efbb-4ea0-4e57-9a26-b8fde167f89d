import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type FooterSalonProps = {
  brand?: string;
  description?: string;
  phone?: string;
  address?: string;
  instagram?: string;
  workingHours?: string;
  legal?: string;
  toTopText?: string;
  className?: string;
};

const defaultNavLinks = [
  { text: "الرئيسية", href: "#hero" },
  { text: "الخدمات", href: "#services" },
  { text: "الإطلالات", href: "#gallery" },
  { text: "الباقات", href: "#packages" },
  { text: "طلب الموعد", href: "#appointment" },
];

const FooterSalon = ({
  brand = "لُما | LUMA",
  description = "صالون نسائي فاخر يعتني بجمالكِ وإطلالتكِ بأرقى معايير العناية والاحترافية.",
  phone = "",
  address = "",
  instagram = "",
  workingHours = "من السبت إلى الخميس: 1:00 ظهرًا - 10:00 مساءً",
  legal = "© 2026 صالون لُما. جميع الحقوق محفوظة.",
  toTopText = "للأعلى ↑",
  className,
}: FooterSalonProps) => {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const hasPhone = Boolean(phone && phone.trim());
  const hasAddress = Boolean(address && address.trim());
  const hasInstagram = Boolean(instagram && instagram.trim());
  const hasWorkingHours = Boolean(workingHours && workingHours.trim());

  const hasAnyContactInfo = hasPhone || hasAddress || hasInstagram || hasWorkingHours;

  return (
    <footer
      id="footer"
      className={cn(
        "relative z-10 bg-[#231713] pt-12 pb-8 text-[#FAF6F2] border-t border-white/10",
        className
      )}
    >
      <div className="mx-auto flex w-[var(--container)] flex-col gap-10">

        {/* Top Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-2xl font-extrabold font-serif text-[#FAF6F2] tracking-normal">
              {brand}
            </span>
            <p className="mt-2 text-sm text-[#FAF6F2]/75 leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="text-xs font-bold text-[#C59B63] uppercase">أقسام الموقع</p>
            <div className="flex flex-col gap-2">
              {defaultNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#FAF6F2]/80 hover:text-[#B87B6C] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Contact Fields (Only display non-empty items) */}
          {hasAnyContactInfo && (
            <div className="lg:col-span-4 flex flex-col gap-3">
              <p className="text-xs font-bold text-[#C59B63] uppercase">بيانات التواصل والزيارة</p>
              
              <div className="space-y-2 text-sm text-[#FAF6F2]/85">
                
                {hasAddress && (
                  <div className="flex items-start gap-2">
                    <span className="text-[#C59B63] font-bold">العنوان:</span>
                    <span>{address}</span>
                  </div>
                )}

                {hasPhone && (
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B63] font-bold">الهاتف:</span>
                    <a href={`tel:${phone}`} className="hover:text-[#B87B6C] transition-colors dir-ltr">
                      {phone}
                    </a>
                  </div>
                )}

                {hasInstagram && (
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B63] font-bold">إنستغرام:</span>
                    <a
                      href={`https://instagram.com/${instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B87B6C] transition-colors dir-ltr"
                    >
                      {instagram}
                    </a>
                  </div>
                )}

                {hasWorkingHours && (
                  <div className="flex items-start gap-2">
                    <span className="text-[#C59B63] font-bold">ساعات العمل:</span>
                    <span>{workingHours}</span>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>

        {/* Bottom Legal & To-Top Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FAF6F2]/60 text-center sm:text-right">
            {legal}
          </p>

          <button
            type="button"
            onClick={toTop}
            className="btn-secondary text-xs py-1.5 px-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            {toTopText}
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterSalon;
