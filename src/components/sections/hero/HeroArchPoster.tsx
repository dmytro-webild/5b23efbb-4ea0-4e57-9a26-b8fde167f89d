import { motion } from "motion/react";
import Media from "@/components/kit/Media";

type HeroArchPosterProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
};

const HeroArchPoster = ({
  title = "الأرائك للمناسبات",
  subtitle = "جدة — المملكة العربية السعودية",
  description = "تجهيز المناسبات وتأجير مستلزمات الحفلات في جدة",
  imageSrc = "https://img.b2bpic.net/free-photo/closeup-beautifully-decorated-table-wedding-ceremony_181624-39361.jpg",
  imageAlt = "تنسيقات فاخرة لتجهيز المناسبات والحفلات بجدة",
  ctaPrimary = { text: "اطلب عرض سعر", href: "#contact-plum-form" },
  ctaSecondary = { text: "استعرض الخدمات", href: "#services" },
}: HeroArchPosterProps) => {
  return (
    <section aria-label="Hero" className="relative w-full bg-deep text-deep-foreground py-12 lg:py-20 overflow-hidden">
      {/* Background Image with Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 z-0">
        <Media
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/80 to-deep/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[60vh] w-[var(--container)] flex-col items-center justify-center text-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/40 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="size-2 rounded-full bg-primary" />
          <span className="text-sm font-semibold text-primary">{subtitle}</span>
        </motion.div>

        {/* Main Title - Clear Arabic, No Letter Splitting, Responsive Sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold font-serif tracking-normal leading-tight text-white drop-shadow-md"
        >
          {title}
        </motion.h1>

        {/* Clear Description Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg sm:text-xl font-medium text-deep-foreground/90 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="btn-primary py-3.5 px-8 text-base font-bold shadow-lg hover:shadow-primary/20"
            >
              {ctaPrimary.text}
            </a>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="btn-secondary py-3.5 px-8 text-base font-bold bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            >
              {ctaSecondary.text}
            </a>
          )}
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-deep-foreground/75 border-t border-white/10 pt-6"
        >
          <span>تجهيز الحفلات والمؤتمرات</span>
          <span>•</span>
          <span>كوش عصرية وفاخرة</span>
          <span>•</span>
          <span>أنظمة صوت وإضاءة</span>
          <span>•</span>
          <span>تأجير مستلزمات الحفلات</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroArchPoster;
