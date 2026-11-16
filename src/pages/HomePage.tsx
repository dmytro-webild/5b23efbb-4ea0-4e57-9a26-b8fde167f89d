import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import AboutArchCurve from "@/components/sections/about/AboutArchCurve";
import GalleryWindowMerge from "@/components/sections/gallery/GalleryWindowMerge";
import ProcessRouteLine from "@/components/sections/features/ProcessRouteLine";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents" data-scene>
        <HeroArchPoster
          title="الأرائك للمناسبات"
          script="جدة"
          labelLeft="نموذج مقترح للعرض"
          labelRight="تجهيز المناسبات"
          marquee={[
            "تجهيز الحفلات",
            "كوش فاخرة",
            "صوت وإضاءة",
            "تأجير مستلزمات"
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/closeup-beautifully-decorated-table-wedding-ceremony_181624-39361.jpg"
          imageAlt="elegant outdoor wedding table setting"
          cta={{
            text: "اطلب عرض سعر",
            href: "https://wa.me/966557700088"
          }}
        />
      </div>

      <div id="about" data-webild-section="AboutArchCurve" data-webild-section-id="AboutArchCurve-1" data-section="about">
        <AboutArchCurve
          title="تجهيزات متكاملة"
          label="خدمات تجهيز الحفلات والمستلزمات في جدة"
          placeTitle="الأرائك للمناسبات"
          description="نوفّر كافة مستلزمات الحفلات والمناسبات الخاصة والشركات، تشمل الكوش والأثاث وأنظمة الصوت والإضاءة والمسارح بأعلى معايير الأناقة في جدة."
          note="صور توضيحية لتنسيقات المناسبات"
          items={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/floral-composition-posted-vertical-box_8353-9659.jpg",
              imageAlt: "Floral composition posted in a vertical box"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/conference-hall-empty-seats-row-projection-screen-before-seminar_637285-6721.jpg",
              imageAlt: "Conference hall empty seats in a row and projection screen before a seminar"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157758.jpg",
              imageAlt: "Top view of dining tables without food"
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWindowMerge" data-webild-section-id="GalleryWindowMerge-1" data-section="gallery" data-scene data-gallery>
        <GalleryWindowMerge
          word="الأرائك"
          quote="نصمم ونجهز المساحات لتجسيد الأناقة والجمال في كل مناسبة."
          credit="فريق الأرائك للمناسبات"
          imageSrc="https://img.b2bpic.net/free-photo/front-view-arrangement-quinceanera-party-table_23-2148478075.jpg"
          imageAlt="Front view arrangement for quinceañera party on table"
          items={[
            {
              title: "حفلات الشركات",
              imageSrc: "https://img.b2bpic.net/free-photo/empty-conference-room-with-black-chairs_23-2148727499.jpg",
              imageAlt: "Empty conference room with black chairs"
            },
            {
              title: "المناسبات الخاصة",
              imageSrc: "https://img.b2bpic.net/free-photo/table-decorated-christmas_1162-199.jpg",
              imageAlt: "Table decorated for christmas"
            },
            {
              title: "تجهيز الكوش",
              imageSrc: "https://img.b2bpic.net/free-photo/romantic-ornaments-with-candles-cage_23-2148120596.jpg",
              imageAlt: "Romantic ornaments with candles and cage"
            },
            {
              title: "تنسيق الطاولات",
              imageSrc: "https://img.b2bpic.net/free-photo/basket-with-plates-tableware-with-copy-space_23-2148247794.jpg",
              imageAlt: "Basket with plates and tableware with copy space"
            },
            {
              title: "الإضاءة والصوت",
              imageSrc: "https://img.b2bpic.net/free-photo/wedding-table-decorations_1303-10511.jpg",
              imageAlt: "wedding table decorations"
            },
            {
              title: "تأجير الكراسي والطاولات",
              imageSrc: "https://img.b2bpic.net/free-photo/restaurant-table-with-classic-white-chairs-turquoise-fabric_140725-2570.jpg",
              imageAlt: "restaurant table with white chairs"
            }
          ]}
        />
      </div>

      <div id="process" data-webild-section="ProcessRouteLine" data-webild-section-id="ProcessRouteLine-1" data-section="process">
        <ProcessRouteLine
          aside="خطوات الطلب"
          items={[
            {
              title: "حدد المناسبة",
              description: "الخطوة ١",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-wedding-planning-resources-arrangement_23-2150279552.jpg",
              imageAlt: "Top view wedding planning resources arrangement"
            },
            {
              title: "أرسل التفاصيل",
              description: "الخطوة ٢",
              imageSrc: "https://img.b2bpic.net/free-photo/young-man-getting-ready-new-year-s-party_23-2149144036.jpg",
              imageAlt: "Young man getting ready for a new year's party"
            },
            {
              title: "استلم العرض",
              description: "الخطوة ٣",
              imageSrc: "https://img.b2bpic.net/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg",
              imageAlt: "Decorated wedding hall with candles, round tables and centerpieces"
            }
          ]}
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title="تواصل معنا الآن"
          script="الأرائك"
          options={[
            "حفلات ومناسبات خاصة",
            "تجهيز اجتماعات الشركات",
            "تصميم الكوش والإضاءة",
            "تأجير الكراسي والطاولات"
          ]}
          submitText="اطلب عبر الواتساب"
          labels={{
            name: "الاسم الكامل",
            email: "الحي السكني بجدة",
            enquiry: "نوع المناسبة",
            message: "عدد الضيوف والملاحظات",
            sending: "جاري التجهيز...",
            sent: "تم التحضير",
            thanks: "سيتم إحالتك إلى الواتساب لإرسال التفاصيل مباشرة."
          }}
        />
      </div>
    </>
  );
}
