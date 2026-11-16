import Media from "@/components/kit/Media";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  categoryTag: string;
};

const salonServices: ServiceItem[] = [
  {
    id: "makeup",
    title: "مكياج المناسبات والعرائس",
    description: "لمسات أنيقة وتغطية احترافية تبرز ملامحكِ الطبيعية بإشراقة ساحرة، من المكياج الناعم اليومي إلى إطلالة العروس الملكية.",
    imageSrc: "https://images.pexels.com/photos/4895443/pexels-photo-4895443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    categoryTag: "مكياج",
  },
  {
    id: "hairstyling",
    title: "تسريحات وتصفيف الشعر",
    description: "تصاميم شعر مبتكرة تناسب كافة الأذواق والمناسبات، تشمل الويفي والأبدو الكلاسيكي والتصفيف العصري بأعلى مستويات الإتقان.",
    imageSrc: "https://images.pexels.com/photos/34650788/pexels-photo-34650788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    categoryTag: "شعر",
  },
  {
    id: "haircolor",
    title: "الصبغات والهايلايت",
    description: "ألوان غنية وتدرجات ساحرة باستخدام صبغات عالمية خالية من الأمونيا تحافظ على صحة شعركِ وتمنحه لمعانًا يدوم طويلاً.",
    imageSrc: "https://images.pexels.com/photos/6899536/pexels-photo-6899536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    categoryTag: "صبغات",
  },
  {
    id: "haircare",
    title: "العناية بالشعر وترميمه",
    description: "جلسات علاجية مكثفة بالبروتين والفلر والزيوت الطبيعية لاستعادة حيويّة الشعر وكثافته وتغذيته من الجذور حتى الأطراف.",
    imageSrc: "https://images.pexels.com/photos/6899537/pexels-photo-6899537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    categoryTag: "عناية",
  },
  {
    id: "nailcare",
    title: "العناية بالأظافر (مانيكير وباديكير)",
    description: "جلسات عناية فائقة لليدين والقدمين مع تنظيف عميق، جلسات البرافين، وتطبيق ألوان طلاء أظافر راقية وجل يدوم طويلاً.",
    imageSrc: "https://images.pexels.com/photos/7750091/pexels-photo-7750091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    categoryTag: "أظافر",
  },
];

type ServicesSalonProps = {
  title?: string;
  subtitle?: string;
  onSelectService?: (serviceTitle: string) => void;
};

const ServicesSalon = ({
  title = "خدمات الجمال والعناية",
  subtitle = "نقدم لكِ في صالون لُما تجربة متكاملة تجمع بين الدقة، الأناقة، وأحدث صيحات العناية النسائية",
  onSelectService,
}: ServicesSalonProps) => {
  const handleSelect = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-12 lg:py-20 bg-background text-foreground border-b border-border">
      <div className="mx-auto w-[var(--container)]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-normal text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
            خدمات صالون لُما
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {salonServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-card rounded-2xl border border-border overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Media
                    src={service.imageSrc}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-border text-xs font-bold text-primary">
                    {service.categoryTag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(service.title)}
                  className="w-full btn-secondary py-2.5 text-sm font-bold flex items-center justify-center gap-2 group-hover:border-primary group-hover:text-primary"
                >
                  <span>اختاري الخدمة</span>
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

export default ServicesSalon;
