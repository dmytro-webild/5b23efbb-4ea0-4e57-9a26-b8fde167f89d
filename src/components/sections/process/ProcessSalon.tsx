type ProcessSalonProps = {
  title?: string;
  subtitle?: string;
};

const steps = [
  {
    stepNumber: "01",
    title: "اختاري الخدمة أو الباقة",
    description: "تصفحي قائمة خدماتنا وباقاتنا الفاخرة واختاري الخدمة أو الباقة التي تلبّي احتياجات إطلالتكِ.",
  },
  {
    stepNumber: "02",
    title: "حددي الوقت المفضل",
    description: "أدخلي بياناتكِ الأساسية واختاري التاريخ والوقت الأنسب لزيارتكِ في صالون لُما بكل سهولة.",
  },
  {
    stepNumber: "03",
    title: "انتظري تأكيد الموعد",
    description: "سيتواصل معكِ فريق الصالون مباشرة لتأكيد الموعد وتأكيد التفاصيل النهائية لاستقبالكِ بكل ترحاب.",
  },
];

const ProcessSalon = ({
  title = "خطوات طلب الموعد",
  subtitle = "ثلاث خطوات بسيطة وسريعة لتنسيق زيارتكِ وحجز إطلالتكِ معنا",
}: ProcessSalonProps) => {
  return (
    <section id="process" className="py-12 lg:py-20 bg-card text-card-foreground border-b border-border">
      <div className="mx-auto w-[var(--container)]">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-normal text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
            سهولة وسرعة
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-background rounded-2xl p-6 sm:p-8 border border-border shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-primary/40">
                    {step.stepNumber}
                  </span>
                  <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-semibold text-accent flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-accent" />
                  <span>خطوة مؤكدة وواضحة</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSalon;
