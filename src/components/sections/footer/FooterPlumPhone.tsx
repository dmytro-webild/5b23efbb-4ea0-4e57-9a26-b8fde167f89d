import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FooterLink = { text: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

type FooterPlumPhoneProps = {
  phone?: string;
  email?: string;
  address?: string[];
  columns?: FooterColumn[];
  legal?: string;
  brand?: string;
  toTopText?: string;
  ariaLabel?: string;
  className?: string;
};

const FooterPlumPhone = ({
  phone = "0557700088",
  address = ["جدة — الياقوت — شارع الأمير عبدالمجيد"],
  columns = [],
  legal = "© 2026 الأرائك للمناسبات. جميع الحقوق محفوظة — نموذج مقترح للعرض.",
  brand = "الأرائك للمناسبات",
  toTopText = "للأعلى ↑",
  ariaLabel,
  className,
}: FooterPlumPhoneProps) => {
  const reduce = useReducedMotion();
  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <footer
      aria-label={ariaLabel ?? `${brand} contact`}
      className={cn("relative z-10 bg-deep pt-12 pb-8 text-deep-foreground border-t border-white/10", className)}
    >
      <div className="mx-auto flex w-[var(--container)] flex-col items-center text-center">
        {/* Brand Header */}
        <p className="text-2xl font-bold font-serif text-primary tracking-normal">{brand}</p>
        <p className="mt-1 text-sm text-deep-foreground/75">تجهيز المناسبات وتأجير مستلزمات الحفلات في جدة</p>

        {/* Big Phone Number */}
        <div className="mt-6 overflow-hidden">
          <motion.a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-3xl sm:text-5xl font-extrabold font-mono tracking-wider text-white hover:text-primary transition-colors dir-ltr"
          >
            {phone}
          </motion.a>
        </div>

        {/* Address Lines (NO EMAIL) */}
        {address.length > 0 && (
          <div className="mt-4 flex flex-col gap-1">
            {address.map((line, index) => (
              <p key={index} className="text-base font-medium text-deep-foreground/80">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Navigation & Legal Bar */}
      <div className="mx-auto mt-10 w-[var(--container)] border-t border-white/10 pt-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {columns.length > 0 && (
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
              {columns.map((column, index) => (
                <nav key={index} aria-label={column.title} className="flex flex-col gap-2">
                  <p className="text-xs font-bold text-primary uppercase">{column.title}</p>
                  <div className="flex flex-wrap gap-4">
                    {column.links.map((link, linkIndex) => (
                      <a key={linkIndex} href={link.href} className="text-sm font-medium text-deep-foreground/80 hover:text-white transition-colors">
                        {link.text}
                      </a>
                    ))}
                  </div>
                </nav>
              ))}
            </div>
          )}

          <div className="flex flex-col items-center lg:items-end gap-3">
            <button
              type="button"
              onClick={toTop}
              className="btn-secondary text-xs py-1.5 px-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              {toTopText}
            </button>
            {legal && <p className="text-xs text-deep-foreground/60 text-center lg:text-left">{legal}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPlumPhone;
