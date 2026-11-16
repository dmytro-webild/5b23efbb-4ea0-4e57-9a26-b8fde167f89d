import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import AboutArchCurve from "@/components/sections/about/AboutArchCurve";
import GalleryWindowMerge from "@/components/sections/gallery/GalleryWindowMerge";
import ProcessRouteLine from "@/components/sections/features/ProcessRouteLine";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents">
        <HeroArchPoster
          title="الأرائك للمناسبات"
          subtitle="جدة — المملكة العربية السعودية"
          description="تجهيز المناسبات وتأجير مستلزمات الحفلات في جدة"
          imageSrc="https://img.b2bpic.net/free-photo/closeup-beautifully-decorated-table-wedding-ceremony_181624-39361.jpg"
          imageAlt="تجهيز وتنسيق فاخر للمناسبات في جدة"
          ctaPrimary={{
            text: "اطلب عرض سعر",
            href: "#contact-plum-form"
          }}
          ctaSecondary={{
            text: "استعرض الخدمات",
            href: "#services"
          }}
        />
      </div>

      <div id="services" data-webild-section="AboutArchCurve" data-webild-section-id="AboutArchCurve-1" data-section="services">
        <AboutArchCurve
          title="خدماتنا وتجهيزاتنا"
          subtitle="تجهيز المناسبات وتأجير المستلزمات في جدة"
          description="نوفّر كافة مستلزمات الحفلات والمناسبات الخاصة والشركات، تشمل الكوش والأثاث وأنظمة الصوت والإضاءة والمسارح بأعلى معايير الأناقة في جدة."
          note="الصور توضيحية لتنسيقات المناسبات"
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWindowMerge" data-webild-section-id="GalleryWindowMerge-1" data-section="gallery">
        <GalleryWindowMerge
          word="معرض الأعمال والتنسيقات"
          quote="نصمم ونجهز المساحات لتجسيد الأناقة والجمال في كل مناسبة."
          credit="فريق الأرائك للمناسبات"
        />
      </div>

      <div id="process" data-webild-section="ProcessRouteLine" data-webild-section-id="ProcessRouteLine-1" data-section="process">
        <ProcessRouteLine
          aside="خطوات الطلب"
          title="سهولة وسرعة في تجهيز مناسبتك"
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title="اطلب عرض سعر لمناسبتك"
          subtitle="أدخل التفاصيل وسيتم إعداد الرسالة لتأكيد الطلب مباشرة عبر الواتساب"
        />
      </div>
    </>
  );
}
