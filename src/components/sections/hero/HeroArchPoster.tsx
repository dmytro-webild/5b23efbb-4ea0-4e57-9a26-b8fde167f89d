import Media from "@/components/kit/Media";

type HeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
};

const HeroArchPoster = ({
  title = "جمالكِ… بتفاصيل تشبهكِ",
  subtitle = "صالون لُما للجمال والعناية النسائية",
  description = "اكتشفي تجربة متكاملة للعناية والإطلالة، من المكياج وتسريحات الشعر إلى الأظافر",
  imageSrc = "https://images.pexels.com/photos/7755551/pexels-photo-7755551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  imageAlt = "صالون لُما — تجربة فاخرة للعناية والجمال",
  ctaPrimary = { text: "اطلبي موعدك", href: "#appointment" },
  ctaSecondary = { text: "اكتشفي خدماتنا", href: "#services" },
}: HeroProps) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-background py-12 lg:py-20 border-b border-border">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Subtle Bronze Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 border border-border shadow-xs mb-6">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold text-foreground tracking-normal">
                {subtitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-foreground leading-tight tracking-normal">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={ctaPrimary.href}
                className="btn-primary py-3 px-8 text-base font-bold shadow-md hover:shadow-lg"
              >
                {ctaPrimary.text}
              </a>
              <a
                href={ctaSecondary.href}
                className="btn-secondary py-3 px-8 text-base font-bold shadow-xs hover:border-primary"
              >
                {ctaSecondary.text}
              </a>
            </div>

            {/* Feature Highlights Pill */}
            <div className="mt-10 pt-8 border-t border-border/80 w-full grid grid-cols-3 gap-4 text-center sm:text-right">
              <div>
                <p className="text-sm font-bold text-foreground">مكياج فاخر</p>
                <p className="text-xs text-muted-foreground mt-0.5">عرائس ومناسبات</p>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">تصفيف وشعر</p>
                <p className="text-xs text-muted-foreground mt-0.5">تسريحات وصبغات</p>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">عناية متكاملة</p>
                <p className="text-xs text-muted-foreground mt-0.5">أظافر وترميم</p>
              </div>
            </div>

          </div>

          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border shadow-md bg-card">
              <Media
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border">
                <p className="text-xs font-bold text-accent uppercase">صالون لُما النسائي</p>
                <p className="text-sm font-bold text-foreground mt-0.5">أجواء هادئة وعناية فائقة بتفاصيل إطلالتكِ</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroArchPoster;
