import { useState } from "react";
import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import ServicesSalon from "@/components/sections/services/ServicesSalon";
import GallerySalon from "@/components/sections/gallery/GallerySalon";
import PackagesSalon from "@/components/sections/packages/PackagesSalon";
import ProcessSalon from "@/components/sections/process/ProcessSalon";
import ContactSalonForm from "@/components/sections/contact/ContactSalonForm";

export default function HomePage() {
  const [selectedServiceOrPackage, setSelectedServiceOrPackage] = useState<string>("مكياج المناسبات والعرائس");

  const handleSelectService = (title: string) => {
    setSelectedServiceOrPackage(title);
  };

  const handleSelectPackage = (title: string) => {
    setSelectedServiceOrPackage(title);
  };

  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents">
        <HeroArchPoster
          title="جمالكِ… بتفاصيل تشبهكِ"
          subtitle="صالون لُما للجمال والعناية النسائية"
          description="اكتشفي تجربة متكاملة للعناية والإطلالة، من المكياج وتسريحات الشعر إلى الأظافر"
          imageSrc="https://images.pexels.com/photos/7195810/pexels-photo-7195810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ctaPrimary={{ text: "اطلبي موعدك", href: "#appointment" }}
          ctaSecondary={{ text: "اكتشفي خدماتنا", href: "#services" }}
        />
      </div>

      <div id="services" data-webild-section="ServicesSalon" data-webild-section-id="ServicesSalon-1" data-section="services">
        <ServicesSalon
          title="خدماتنا والعناية"
          subtitle="نقدم لكِ في صالون لُما تجربة متكاملة تجمع بين الدقة، الأناقة، وأحدث صيحات العناية النسائية"
          onSelectService={handleSelectService}
        />
      </div>

      <div id="gallery" data-webild-section="GallerySalon" data-webild-section-id="GallerySalon-1" data-section="gallery">
        <GallerySalon
          title="معرض الإطلالات"
          subtitle="استعرضي جانبًا من إلهام الإطلالات والخدمات التي نمتّعكِ بها في صالون لُما"
          note="صور توضيحية"
        />
      </div>

      <div id="packages" data-webild-section="PackagesSalon" data-webild-section-id="PackagesSalon-1" data-section="packages">
        <PackagesSalon
          title="الباقات الفاخرة"
          subtitle="تجارب عناية وإطلالات صُممت بعناية لتمنحكِ الأناقة الكاملة والدلال الذي تستحقينه"
          onSelectPackage={handleSelectPackage}
        />
      </div>

      <div id="process" data-webild-section="ProcessSalon" data-webild-section-id="ProcessSalon-1" data-section="process">
        <ProcessSalon
          title="خطوات طلب الموعد"
          subtitle="ثلاث خطوات بسيطة وسريعة لتنسيق زيارتكِ وحجز إطلالتكِ معنا"
        />
      </div>

      <div id="appointment" data-webild-section="ContactSalonForm" data-webild-section-id="ContactSalonForm-1" data-section="appointment">
        <ContactSalonForm
          title="اطلبي موعدكِ الآن"
          subtitle="نسعد باستقبالكِ في صالون لُما. الرجاء تعبئة بيانات طلبكِ لتنسيق زيارتكِ"
          selectedServiceOrPackage={selectedServiceOrPackage}
          onSelectServiceOrPackageChange={setSelectedServiceOrPackage}
        />
      </div>
    </>
  );
}
