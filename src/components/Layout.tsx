import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="solid" data-card="frame" data-pattern="hairlines">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="الأرائك للمناسبات"
          cta={{
            text: "اطلب عرض سعر",
            href: "#contact-plum-form"
          }}
        />
      </header>
      <main className="flex-grow" data-button="solid" data-card="frame" data-pattern="hairlines">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterPlumPhone
          brand="الأرائك للمناسبات"
          phone="0557700088"
          email="info@alaraik.sa"
          address={[
            "جدة — الياقوت — شارع الأمير عبدالمجيد"
          ]}
          columns={[
            {
              title: "الخدمات",
              links: [
                {
                  text: "تجهيز المناسبات",
                  href: "#about"
                },
                {
                  text: "تصاميم الكوش",
                  href: "#about"
                },
                {
                  text: "تأجير الكراسي والطاولات",
                  href: "#about"
                },
                {
                  text: "أنظمة الصوت والإضاءة",
                  href: "#about"
                }
              ]
            },
            {
              title: "تصفح الموقع",
              links: [
                {
                  text: "الرئيسية",
                  href: "#hero"
                },
                {
                  text: "نماذج التنسيقات",
                  href: "#gallery"
                },
                {
                  text: "خطوات الطلب",
                  href: "#process"
                },
                {
                  text: "اطلب عرض سعر",
                  href: "#contact-plum-form"
                }
              ]
            },
            {
              title: "التواصل المباشر",
              links: [
                {
                  text: "واتساب",
                  href: "https://wa.me/966557700088"
                },
                {
                  text: "اتصال تلفوني",
                  href: "tel:0557700088"
                },
                {
                  text: "نموذج التواصل",
                  href: "#contact-plum-form"
                }
              ]
            }
          ]}
          legal="© 2026 الأرائك للمناسبات. جميع الحقوق محفوظة."
          toTopText="للأعلى"
        />
      </footer>
    </div>
  );
}
