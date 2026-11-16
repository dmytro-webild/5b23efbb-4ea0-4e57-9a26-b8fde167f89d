import { motion } from "motion/react";
import Media from "@/components/kit/Media";

type Stop = {
  title: string;
  description?: string;
  stepNumber: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ProcessRouteLineProps = {
  aside?: string;
  title?: string;
  items?: Stop[];
  ariaLabel?: string;
  className?: string;
};

const defaultSteps: Stop[] = [
  {
    stepNumber: "١",
    title: "حدد المناسبة والخدمات",
    description: "حدد نوع مناسبتك (حفلة شركة، زفاف، اجتماع) والخدمات المطلوبة من كوش، كراسي، أو صوت وإضاءة.",
    imageSrc: "https://img.b2bpic.net/free-photo/top-view-wedding-planning-resources-arrangement_23-2150279552.jpg",
    imageAlt: "تحديد تفاصيل المناسبة والمستلزمات",
  },
  {
    stepNumber: "٢",
    title: "أرسل التفاصيل عبر النموذج",
    description: "أدخل معلومات المناسبة (التاريخ، الحي، عدد الضيوف) وسيتم ترتيب الرسالة تلقائياً للتواصل.",
    imageSrc: "https://img.b2bpic.net/free-photo/young-man-getting-ready-new-year-s-party_23-2149144036.jpg",
    imageAlt: "إرسال البيانات والتفاصيل عبر الواتساب",
  },
  {
    stepNumber: "٣",
    title: "استلم عرض السعر المباشر",
    description: "يتواصل معك فريقنا في جدة فوراً لتأكيد التفاصيل وتقديم عرض السعر الشامل والمناسب لميزانيتك.",
    imageSrc: "https://img.b2bpic.net/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?_wi=2",
    imageAlt: "استلام عرض السعر وتجهيز القاعة",
  },
];

const ProcessRouteLine = ({
  aside = "خطوات الطلب",
  title = "سهولة وسرعة في تجهيز مناسبتك",
  items = defaultSteps,
}: ProcessRouteLineProps) => {
  return (
    <section id="process" aria-label="خطوات الطلب" className="py-12 lg:py-16 bg-background text-foreground">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-bold text-primary uppercase tracking-normal">{aside}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-serif text-foreground">
            {title}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-extrabold text-lg shadow-sm">
                  {item.stepNumber}
                </span>
                <span className="text-xs font-semibold text-muted-foreground bg-background px-2.5 py-1 rounded-full border border-border">
                  الخطوة {item.stepNumber}
                </span>
              </div>

              {/* Step Image */}
              {item.imageSrc && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted mb-4">
                  <Media
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <h3 className="text-xl font-bold font-serif text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessRouteLine;
