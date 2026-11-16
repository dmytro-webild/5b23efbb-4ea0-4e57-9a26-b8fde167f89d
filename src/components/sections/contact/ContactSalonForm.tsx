import { useState, useId, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import Media from "@/components/kit/Media";

// Editable salon whatsapp number constant (keep empty by default as instructed)
export const SALON_WHATSAPP_NUMBER: string = "";

type ContactSalonFormProps = {
  title?: string;
  subtitle?: string;
  selectedServiceOrPackage?: string;
  onSelectServiceOrPackageChange?: (value: string) => void;
};

const serviceAndPackageOptions = [
  { group: "الخدمات", options: [
    "مكياج المناسبات والعرائس",
    "تسريحات وتصفيف الشعر",
    "الصبغات والهايلايت",
    "العناية بالشعر وترميمه",
    "العناية بالأظافر (مانيكير وباديكير)",
  ]},
  { group: "الباقات الفاخرة", options: [
    "إطلالة مناسبة",
    "لحظة عناية",
    "إطلالة العروس",
  ]},
];

const timeOptions = [
  "1:00 ظهرًا - 2:00 ظهرًا",
  "2:00 ظهرًا - 3:00 ظهرًا",
  "3:00 ظهرًا - 4:00 عصراً",
  "4:00 عصراً - 5:00 مساءً",
  "5:00 مساءً - 6:00 مساءً",
  "6:00 مساءً - 7:00 مساءً",
  "7:00 مساءً - 8:00 مساءً",
  "8:00 مساءً - 9:00 مساءً",
  "9:00 مساءً - 10:00 مساءً",
];

const ContactSalonForm = ({
  title = "اطلبي موعدكِ الآن",
  subtitle = "نسعد باستقبالكِ في صالون لُما. الرجاء تعبئة بيانات طلبكِ لتنسيق زيارتكِ",
  selectedServiceOrPackage = "",
  onSelectServiceOrPackageChange,
}: ContactSalonFormProps) => {
  const nameId = useId();
  const serviceId = useId();
  const dateId = useId();
  const timeId = useId();
  const notesId = useId();

  const todayStr = new Date().toISOString().split("T")[0];

  const [name, setName] = useState("");
  const [serviceChoice, setServiceChoice] = useState(selectedServiceOrPackage || "مكياج المناسبات والعرائس");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(timeOptions[3]);
  const [notes, setNotes] = useState("");

  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Sync internal choice if prop changes
  const activeService = selectedServiceOrPackage || serviceChoice;

  const handleServiceChange = (val: string) => {
    setServiceChoice(val);
    if (onSelectServiceOrPackageChange) {
      onSelectServiceOrPackageChange(val);
    }
  };

  const handleReviewClick = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() && activeService && date && time) {
      setIsReviewOpen(true);
    }
  };

  const constructWhatsAppMessage = () => {
    const lines = [
      "مرحباً صالون لُما، أود طلب موعد وفق التفاصيل التالية:",
      `• الاسم: ${name}`,
      `• الخدمة / الباقة: ${activeService}`,
      `• التاريخ المفضل: ${date}`,
      `• الوقت المفضل: ${time}`,
      `• الملاحظات: ${notes.trim() || "لا يوجد"}`,
    ];
    return lines.join("\n");
  };

  const handleSendWhatsApp = () => {
    if (!SALON_WHATSAPP_NUMBER) return;
    const msg = constructWhatsAppMessage();
    const url = `https://wa.me/${SALON_WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="appointment" className="py-12 lg:py-20 bg-background text-foreground border-b border-border">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Form Side */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                طلب الموعد
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold font-serif text-foreground">
                {title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            </div>

            <form onSubmit={handleReviewClick} className="flex flex-col gap-5 bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-xs">
              
              {/* Field 1: Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor={nameId} className="text-sm font-bold text-foreground">
                  الاسم الكامل <span className="text-destructive">*</span>
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="أدخلي اسمكِ الكريم"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Field 2: Service / Package Select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor={serviceId} className="text-sm font-bold text-foreground">
                  الخدمة أو الباقة <span className="text-destructive">*</span>
                </label>
                <select
                  id={serviceId}
                  required
                  value={activeService}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {serviceAndPackageOptions.map((group) => (
                    <optgroup key={group.group} label={group.group}>
                      {group.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Row: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Field 3: Date (min = today) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={dateId} className="text-sm font-bold text-foreground">
                    التاريخ المفضل <span className="text-destructive">*</span>
                  </label>
                  <input
                    id={dateId}
                    type="date"
                    required
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Field 4: Time Select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={timeId} className="text-sm font-bold text-foreground">
                    الوقت المفضل <span className="text-destructive">*</span>
                  </label>
                  <select
                    id={timeId}
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Field 5: Notes */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor={notesId} className="text-sm font-bold text-foreground">
                  ملاحظات اختيارية
                </label>
                <textarea
                  id={notesId}
                  rows={3}
                  placeholder="أذكري أي تفاصيل إضافية أو تفضيلات ترغبين في إضافتها..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 text-base font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>راجعي طلبكِ</span>
                  <svg className="size-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  الموعد لا يتأكد إلا بعد رد الصالون.
                </p>
              </div>

            </form>
          </div>

          {/* Aesthetic Salon Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-xs bg-card">
              <Media
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop"
                alt="أجواء صالون لُما"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-accent uppercase">صالون لُما النسائي</span>
                <h3 className="text-2xl font-bold font-serif text-white">جمالكِ يستحق الدلال</h3>
                <p className="text-xs text-white/80 mt-1">خدمة راقية واستقبال دافئ بكل تفصيل</p>
              </div>
            </div>

            {/* Guarantees / Salon Notes Box */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-xs">
              <h4 className="text-base font-bold font-serif text-foreground border-b border-border pb-2.5">
                تعليمات وتنبيهات الموعد
              </h4>

              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  نرجو الحضور قبل الموعد بـ 10 دقائق لضمان تقديم الخدمة بأعلى جودة ورخاء.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  يتم تأكيد الموعد رسميًا بعد التواصل المباشر معكِ من قِبَل موظفة الاستقبال.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  يمكنكِ تعديل أو إلغاء الموعد بالتواصل المباشر مع الصالون قبل الموعد بوقت كافٍ.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isReviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsReviewOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-2xl flex flex-col gap-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-primary">ملخص طلب الموعد</span>
                  <h3 className="text-xl font-bold font-serif text-foreground mt-0.5">مراجعة بيانات الطلب</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsReviewOpen(false)}
                  className="size-8 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-muted"
                >
                  ✕
                </button>
              </div>

              {/* Data Summary List */}
              <div className="space-y-3 bg-background p-4 rounded-xl border border-border text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground font-medium">الاسم:</span>
                  <span className="font-bold text-foreground">{name}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground font-medium">الخدمة / الباقة:</span>
                  <span className="font-bold text-primary">{activeService}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground font-medium">التاريخ المفضل:</span>
                  <span className="font-bold text-foreground">{date}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground font-medium">الوقت المفضل:</span>
                  <span className="font-bold text-foreground">{time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-medium">الملاحظات:</span>
                  <span className="font-bold text-foreground max-w-[200px] truncate text-left">{notes || "لا يوجد"}</span>
                </div>
              </div>

              {/* WhatsApp Connection Logic */}
              {SALON_WHATSAPP_NUMBER ? (
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full btn-primary py-3 text-base font-bold flex items-center justify-center gap-2 bg-[#25D366] border-[#25D366] text-white hover:bg-[#20bd5a]"
                  >
                    <span>إرسال عبر الواتساب</span>
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    سيتم إرسال تفاصيل الموعد مباشرة إلى واتساب الصالون لتأكيد حجزكِ.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 bg-primary/10 border border-primary/20 p-4 rounded-xl text-center">
                  <span className="text-sm font-bold text-primary">
                    معاينة الطلب فقط — لم يتم الإرسال
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    لم يتم إضافة رقم الواتساب الخاص بالصالون بعد. هذه معاينة توضيحية لملخص الطلب.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsReviewOpen(false)}
                    className="btn-secondary py-2 text-xs font-bold self-center mt-1"
                  >
                    إغلاق المعاينة
                  </button>
                </div>
              )}

              {/* Confirmation Notice */}
              <p className="text-xs text-center text-muted-foreground pt-1 border-t border-border">
                الموعد لا يتأكد إلا بعد رد الصالون.
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ContactSalonForm;
