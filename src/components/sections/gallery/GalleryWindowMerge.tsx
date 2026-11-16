import { useState } from "react";
import { motion } from "motion/react";
import Media from "@/components/kit/Media";

type GalleryItem = {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt?: string;
};

type GalleryWindowMergeProps = {
  word?: string;
  quote?: string;
  credit?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: GalleryItem[];
  ariaLabel?: string;
  className?: string;
};

const defaultGalleryItems: GalleryItem[] = [
  {
    title: "تنسيق قاعات ومؤتمرات الشركات",
    category: "حفلات الشركات",
    imageSrc: "https://img.b2bpic.net/free-photo/empty-conference-room-with-black-chairs_23-2148727499.jpg?_wi=2",
    imageAlt: "تنسيق قاعة مؤتمرات رسمية بجدة",
  },
  {
    title: "طاولات استقبال وضيافة فاخرة",
    category: "المناسبات الخاصة",
    imageSrc: "https://img.b2bpic.net/free-photo/front-view-arrangement-quinceanera-party-table_23-2148478075.jpg?_wi=2",
    imageAlt: "طاولة ضيافة منسقة بالورد والديكورات",
  },
  {
    title: "تصميم كوش ومستلزمات العروس",
    category: "الكوش والمسارح",
    imageSrc: "https://img.b2bpic.net/free-photo/romantic-ornaments-with-candles-cage_23-2148120596.jpg?_wi=2",
    imageAlt: "كوشة فاخرة مع إضاءة وديكور ورد",
  },
  {
    title: "تأجير طاولات وكراسي الحفلات",
    category: "الأثاث والمستلزمات",
    imageSrc: "https://img.b2bpic.net/free-photo/restaurant-table-with-classic-white-chairs-turquoise-fabric_140725-2570.jpg?_wi=2",
    imageAlt: "جلسة طاولات وكراسي فاخرة",
  },
  {
    title: "تأثيرات الإضاءة والديكور الدائري",
    category: "الصوت والإضاءة",
    imageSrc: "https://img.b2bpic.net/free-photo/wedding-table-decorations_1303-10511.jpg?_wi=2",
    imageAlt: "تأثيرات إضاءة زهرية ساحرة",
  },
  {
    title: "تنسيق مسارح وممرات العروس",
    category: "الكوش والمسارح",
    imageSrc: "https://img.b2bpic.net/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?_wi=3",
    imageAlt: "تجهيز مسرح وممر للمناسبات",
  },
];

const categories = ["الكل", "حفلات الشركات", "المناسبات الخاصة", "الكوش والمسارح", "الأثاث والمستلزمات", "الصوت والإضاءة"];

const GalleryWindowMerge = ({
  word = "معرض الأعمال والتنسيقات",
  quote = "نصمم ونجهز المساحات لتجسيد الأناقة والجمال في كل مناسبة.",
  credit = "فريق الأرائك للمناسبات — جدة",
  items = defaultGalleryItems,
}: GalleryWindowMergeProps) => {
  const [activeTab, setActiveTab] = useState("الكل");

  const filteredItems = activeTab === "الكل" ? items : items.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" aria-label="معرض الأعمال" className="py-12 lg:py-16 bg-card text-card-foreground border-y border-border">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-sm font-bold text-primary uppercase tracking-normal">الأرائك للمناسبات</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-foreground">
            {word}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {quote}
          </p>
          <p className="mt-1 text-xs font-semibold text-muted-foreground">
            {credit} • (الصور توضيحية لتنسيقات المناسبات)
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background text-foreground hover:bg-muted border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <Media
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="inline-block rounded-md bg-primary/90 px-2 py-0.5 text-[10px] font-bold text-primary-foreground mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-serif text-white line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryWindowMerge;
