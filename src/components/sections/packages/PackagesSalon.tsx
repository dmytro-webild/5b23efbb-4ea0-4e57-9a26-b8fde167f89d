type SalonPackage = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
};

const salonPackages: SalonPackage[] = [
  {
    id: "pkg-event",
    title: "إطلالة مناسبة",
    subtitle: "باقة سريعة ومتكاملة للمناسبات والحفلات",
    tagline: "مثالية للمناسبات الخاصة والاجتماعية",
    features: [
      "تسريحة شعر أنيقة (ويفي أو سشوار تصفيف)",
      "مكياج مناسبات متكامل وتغطية احترافية",
      "عناية سريعة باليدين وتطبيق طلاء أظافر",
      "تركيب رموش خفيفة ومجانية",
    ],
    recommendedFor: "لإطلالة مميزة وراقية في سهراتكِ ومناسباتكِ",
    isPopular: false,
  },
  {
    id: "pkg-care",
    title: "لحظة عناية",
    subtitle: "جلسة استرخاء ودلال متكاملة للشعر والأظافر",
    tagline: "جلسة دلال تجدد طاقتكِ وجمالكِ",
    features: [
      "جلسة علاجية وترميم مكثف للشعر بالفلر أو الزيوت",
      "مانيكير وباديكير شامل لليدين والقدمين مع مساج هادئ",
      "قناع ترطيب واستجمام غني لليدين",
      "تصفيف شعر هادئ بعد الجلسة العلاجية",
    ],
    recommendedFor: "للاسترخاء والعناية بالذات في عطلة الأسبوع",
    isPopular: true,
  },
  {
    id: "pkg-bride",
    title: "إطلالة العروس",
    subtitle: "تجربة ملكية استثنائية لليلتكِ المميزة",
    tagline: "كل ما تحتاجينه لإطلالة عروس ساحرة",
    features: [
      "مكياج عروس ملكي فاخر بأحدث التقنيات",
      "تسريحة شعر ملكية مع تثبيت الطرحة والأكسسوارات",
      "برنامج عناية شاملة للشعر والأظافر قبل المناسبة",
      "تركيب رموش احترافية وجلسة نضارة للبشرة",
    ],
    recommendedFor: "للعرائس الباحثات عن الأناقة والكمال",
    isPopular: false,
  },
];

type PackagesSalonProps = {
  title?: string;
  subtitle?: string;
  onSelectPackage?: (packageTitle: string) => void;
};

const PackagesSalon = ({
  title = "الباقات الفاخرة",
  subtitle = "تجارب عناية وإطلالات صُممت بعناية لتمنحكِ الأناقة الكاملة والدلال الذي تستحقينه",
  onSelectPackage,
}: PackagesSalonProps) => {
  const handleSelect = (packageTitle: string) => {
    if (onSelectPackage) {
      onSelectPackage(packageTitle);
    }
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-12 lg:py-20 bg-background text-foreground border-b border-border">
      <div className="mx-auto w-[var(--container)]">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-normal text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
            باقات صالون لُما
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {salonPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                pkg.isPopular
                  ? "bg-card border-primary ring-2 ring-primary/20 shadow-md scale-100 md:-translate-y-2"
                  : "bg-card border-border shadow-xs hover:shadow-md"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 right-6 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-bold shadow-xs">
                  الأكثر طلبًا
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-border pb-5 mb-5">
                  <span className="text-xs font-bold uppercase text-accent">{pkg.tagline}</span>
                  <h3 className="text-2xl font-extrabold font-serif text-foreground mt-1">{pkg.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{pkg.subtitle}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-6">
                  <p className="text-xs font-bold text-foreground">مكونات الباقة:</p>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-foreground/90 font-medium leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3 text-center">{pkg.recommendedFor}</p>
                <button
                  type="button"
                  onClick={() => handleSelect(pkg.title)}
                  className={`w-full text-sm font-bold py-3 rounded-full transition-all flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? "btn-primary shadow-md"
                      : "btn-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  <span>اختاري الباقة</span>
                  <svg className="size-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PackagesSalon;
