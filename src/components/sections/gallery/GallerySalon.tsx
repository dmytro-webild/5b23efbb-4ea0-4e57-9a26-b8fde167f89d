import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Media from "@/components/kit/Media";

export type GalleryImage = {
  id: string;
  title: string;
  category: "makeup" | "hair" | "nails";
  categoryLabel: string;
  imageSrc: string;
};

const galleryItems: GalleryImage[] = [
  {
    id: "g1",
    title: "إطلالة مكياج هادئة ومميزة",
    category: "makeup",
    categoryLabel: "المكياج",
    imageSrc: "https://images.pexels.com/photos/7750100/pexels-photo-7750100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "g2",
    title: "تصفيف شعر وويفي كلاسيكي",
    category: "hair",
    categoryLabel: "الشعر",
    imageSrc: "https://images.pexels.com/photos/30037031/pexels-photo-30037031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "g3",
    title: "عناية بالأظافر وطلاء وردي ترابي",
    category: "nails",
    categoryLabel: "الأظافر",
    imageSrc: "https://images.pexels.com/photos/34930161/pexels-photo-34930161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "g4",
    title: "مكياج عروس فاخر وبرونزي",
    category: "makeup",
    categoryLabel: "المكياج",
    imageSrc: "https://images.pexels.com/photos/34930165/pexels-photo-34930165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "g5",
    title: "صبغة شعر دافئة ولعان طبيعي",
    category: "hair",
    categoryLabel: "الشعر",
    imageSrc: "https://images.pexels.com/photos/8312030/pexels-photo-8312030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "g6",
    title: "باديكير ومانيكير بريميوم",
    category: "nails",
    categoryLabel: "الأظافر",
    imageSrc: "https://images.pexels.com/photos/27165065/pexels-photo-27165065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

type FilterKey = "all" | "makeup" | "hair" | "nails";

type GallerySalonProps = {
  title?: string;
  subtitle?: string;
  note?: string;
};

const GallerySalon = ({
  title = "معرض الإطلالات",
  subtitle = "استعرضي جانبًا من إلهام الإطلالات والخدمات التي نمتّعكِ بها في صالون لُما",
  note = "صور توضيحية",
}: GallerySalonProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-12 lg:py-20 bg-card text-card-foreground border-b border-border">
      <div className="mx-auto w-[var(--container)]">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-background px-3.5 py-1 rounded-full border border-border text-xs font-bold text-accent">
            <span>{note}</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { key: "all", label: "الكل" },
            { key: "makeup", label: "المكياج" },
            { key: "hair", label: "الشعر" },
            { key: "nails", label: "الأظافر" },
          ].map((btn) => {
            const isActive = activeFilter === btn.key;
            return (
              <button
                key={btn.key}
                type="button"
                onClick={() => setActiveFilter(btn.key as FilterKey)}
                className={`px-5 py-2 text-sm font-bold rounded-full border transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-background shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Media
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-bold uppercase text-accent">{item.categoryLabel}</span>
                <h3 className="text-lg font-bold font-serif text-white mt-0.5">{item.title}</h3>
                <span className="mt-2 text-xs font-semibold text-white/80 inline-flex items-center gap-1">
                  <span>تكبير الصورة</span>
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Zoom Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden border border-border shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 left-4 z-10 size-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                  aria-label="إغلاق الصورة"
                >
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                  <Media
                    src={activeImage.imageSrc}
                    alt={activeImage.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Modal Description Footer */}
                <div className="p-4 sm:p-6 bg-card border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase">{activeImage.categoryLabel}</span>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-foreground">{activeImage.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground">{note}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GallerySalon;
