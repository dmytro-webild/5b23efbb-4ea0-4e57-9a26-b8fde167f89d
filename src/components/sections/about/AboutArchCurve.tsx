import { motion } from "motion/react";
import Media from "@/components/kit/Media";

type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type AboutArchCurveProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  note?: string;
  services?: ServiceItem[];
  className?: string;
};

const defaultServices: ServiceItem[] = [
  {
    title: "تجهيز حفلات الشركات",
    description: "تنسيقات متكاملة للمؤتمرات، الندوات، وحفلات الافتتاح واللقاءات الرسمية بأعلى معايير التنظيم.",
    imageSrc: "https://img.b2bpic.net/free-photo/empty-conference-room-with-black-chairs_23-2148727499.jpg",
    imageAlt: "تجهيز قاعات المؤتمرات واللقاءات الرسمية للشركات بجدة",
  },
  {
    title: "المناسبات الخاصة والزفاف",
    description: "تنسيق فاخر لأمسيات الزفاف والملكات والحفلات العائلية بأجواء دافئة وتصاميم مبهرة.",
    imageSrc: "https://img.b2bpic.net/free-photo/front-view-arrangement-quinceanera-party-table_23-2148478075.jpg",
    imageAlt: "تنسيق طاولات الزفاف والمناسبات الخاصة في جدة",
  },
  {
    title: "تصميم وتجهيز الكوش",
    description: "تصاميم كوش عصرية وفاخرة تدمج بين الورد الطبيعي والديكورات الراقية لإبراز جمال المناسبة.",
    imageSrc: "https://img.b2bpic.net/free-photo/romantic-ornaments-with-candles-cage_23-2148120596.jpg",
    imageAlt: "تصميم كوش عصرية وفاخرة للأعراس والمناسبات",
  },
  {
    title: "تأجير الكراسي والطاولات",
    description: "تشكيلة متنوعة من كراسي نابليون الشفافة، الذهبية، والطاولات الدائرية مع مفارش فاخرة.",
    imageSrc: "https://img.b2bpic.net/free-photo/restaurant-table-with-classic-white-chairs-turquoise-fabric_140725-2570.jpg",
    imageAlt: "تأجير الكراسي الفاخرة والطاولات للحفلات والمناسبات",
  },
  {
    title: "أنظمة الصوت والإضاءة",
    description: "تجهيزات صوتية عالية الدقة وإضاءة ديكورية متحركة تضفي أجواء ساحرة على موقع المناسبة.",
    imageSrc: "https://img.b2bpic.net/free-photo/wedding-table-decorations_1303-10511.jpg",
    imageAlt: "إضاءة ديكورية وأنظمة صوت للحفلات بجدة",
  },
  {
    title: "تجهيز المسارح والمنصات",
    description: "بناء وتجهيز مسارح بأحجام متعددة مع الخلفيات المضاءة والسجاد الفاخر لحفلات التكريم والمنصات.",
    imageSrc: "https://img.b2bpic.net/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg",
    imageAlt: "تجهيز المسارح والمنصات الرئيسية للمناسبات",
  },
];

const AboutArchCurve = ({
  title = "خدماتنا وتجهيزاتنا",
  subtitle = "حلول متكاملة لتجهيز المناسبات في جدة",
  description = "نقدم في الأرائك للمناسبات باقة شاملة من خدمات التجهيز والتأجير لتلبية تطلعاتكم وضمان خروج مناسبتكم بأبهى صورة.",
  note = "الصور توضيحية لتنسيقات المناسبات",
  services = defaultServices,
}: AboutArchCurveProps) => {
  return (
    <section id="services" aria-label="الخدمات" className="py-12 lg:py-16 bg-background text-foreground">
      <div className="mx-auto w-[var(--container)]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-sm font-bold text-primary uppercase tracking-normal">{subtitle}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          {note && (
            <p className="mt-2 inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
              {note}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Media
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {service.title}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-primary">
                  <a href="#contact-plum-form" className="hover:underline flex items-center gap-1">
                    <span>طلب الخدمة</span>
                    <span>←</span>
                  </a>
                  <span className="text-muted-foreground font-normal">جدة</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutArchCurve;
