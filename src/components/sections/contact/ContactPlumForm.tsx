import { useState, type FormEvent } from "react";
import Media from "@/components/kit/Media";

type ContactPlumFormProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  ariaLabel?: string;
  className?: string;
};

const availableServices = [
  "تجهيز حفلات الشركات",
  "المناسبات الخاصة والزفاف",
  "تصميم وتجهيز الكوش",
  "تأجير الكراسي والطاولات",
  "أنظمة الصوت والإضاءة",
  "تجهيز المسارح والمنصات",
];

const ContactPlumForm = ({
  title = "اطلب عرض سعر لمناسبتك",
  subtitle = "أدخل التفاصيل وسيتم إعداد الرسالة لتأكيد الطلب مباشرة عبر الواتساب",
  imageSrc = "https://img.b2bpic.net/free-photo/closeup-beautifully-decorated-table-wedding-ceremony_181624-39361.jpg",
  imageAlt = "تجهيز وتنسيق المناسبات بجدة",
}: ContactPlumFormProps) => {
  const [name, setName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [district, setDistrict] = useState("");
  const [eventType, setEventType] = useState("زفاف / ملكة");
  const [guestCount, setGuestCount] = useState<number | "">("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["تجهيز وتنسيق كامل"]);
  const [notes, setNotes] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const servicesText = selectedServices.length > 0 ? selectedServices.join("، ") : "لم يتم التحديد";

    const messageLines = [
      "مرحباً الأرائك للمناسبات، أود طلب عرض سعر:",
      `• الاسم: ${name || "غير محدد"}`,
      `• تاريخ المناسبة: ${eventDate || "غير محدد"}`,
      `• الحي بجدة: ${district || "غير محدد"}`,
      `• نوع المناسبة: ${eventType}`,
      `• عدد الضيوف: ${guestCount || "غير محدد"}`,
      `• الخدمات المطلوبة: ${servicesText}`,
      `• الملاحظات: ${notes || "لا يوجد"}`,
    ];

    const fullMessage = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/966557700088?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact-plum-form" aria-label="نموذج طلب عرض السعر" className="py-12 lg:py-16 bg-card text-card-foreground">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-6">
              <span className="text-sm font-bold text-primary uppercase tracking-normal">الأرائك للمناسبات — جدة</span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold font-serif text-foreground">
                {title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-background p-6 sm:p-8 rounded-xl border border-border shadow-sm">
              
              {/* Row 1: Name & Event Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="field-name" className="text-sm font-bold text-foreground">
                    الاسم الكامل <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="field-name"
                    type="text"
                    required
                    placeholder="مثال: أحمد الغامدي"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="field-date" className="text-sm font-bold text-foreground">
                    تاريخ المناسبة <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="field-date"
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Row 2: District & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="field-district" className="text-sm font-bold text-foreground">
                    الحي السكني بجدة <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="field-district"
                    type="text"
                    required
                    placeholder="مثال: الياقوت، الشاطئ، الحمراء"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="field-type" className="text-sm font-bold text-foreground">
                    نوع المناسبة <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="field-type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="زفاف / ملكة">زفاف / ملكة</option>
                    <option value="حفلة شركة / اجتماع رسمي">حفلة شركة / اجتماع رسمي</option>
                    <option value="مناسبة خاصة / حفلة عائلية">مناسبة خاصة / حفلة عائلية</option>
                    <option value="مؤتمر / حفل افتتاح">مؤتمر / حفل افتتاح</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Guest Count (Independent Numeric Field) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="field-guests" className="text-sm font-bold text-foreground">
                  عدد الضيوف المتوقع <span className="text-destructive">*</span>
                </label>
                <input
                  id="field-guests"
                  type="number"
                  min="1"
                  required
                  placeholder="أدخل عدد الضيوف (مثال: 150)"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value ? Number(e.target.value) : "")}
                  className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Row 4: Multiple Services Checkboxes */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground">
                  الخدمات المطلوبة (يمكنك اختيار أكثر من خدمة)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {availableServices.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border text-sm font-semibold cursor-pointer transition-colors ${
                        selectedServices.includes(service)
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-card text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="size-4 rounded border-input text-primary focus:ring-primary"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 5: Notes */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="field-notes" className="text-sm font-bold text-foreground">
                  الملاحظات ومتطلبات خاصة
                </label>
                <textarea
                  id="field-notes"
                  rows={3}
                  placeholder="أذكر أي تفاصيل أو متطلبات إضافية تريد إضافتها..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button - Opens WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 text-base font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>اطلب عرض سعر عبر الواتساب</span>
                </button>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  سيتم فتح تطبيق الواتساب بنص مرتب يحتوي تفاصيل الطلب لإرسالها مباشرة.
                </p>
              </div>

            </form>
          </div>

          {/* Contact Details & Image Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border shadow-sm">
              <Media
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase text-primary">الأرائك للمناسبات</span>
                <h3 className="text-2xl font-bold font-serif">جدة — المملكة العربية السعودية</h3>
              </div>
            </div>

            {/* Verified Contact Card (NO EMAIL) */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm">
              <h4 className="text-lg font-bold font-serif text-foreground border-b border-border pb-2">
                معلومات التواصل المباشرة
              </h4>

              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground">العنوان</p>
                  <p className="text-base font-semibold text-foreground">جدة — الياقوت — شارع الأمير عبدالمجيد</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground">الهاتف المباشر</p>
                  <a href="tel:0557700088" className="text-base font-bold text-foreground hover:text-primary transition-colors">
                    0557700088
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground">خدمة الواتساب المباشرة</p>
                  <a
                    href="https://wa.me/966557700088"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#25D366] hover:underline"
                  >
                    0557700088
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPlumForm;
