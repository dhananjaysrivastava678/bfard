
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "/gallery/bs-img1.jpeg", title: "National Seminar", category: "Seminar" },
  { id: 2, src: "/gallery/bs-img2.jpeg", title: "National Seminar", category: "Seminar" },
  { id: 3, src: "/gallery/bs-img3.jpeg", title: "National Seminar", category: "Seminar" },
  { id: 4, src: "/gallery/bs-img4.jpeg", title: "National Seminar", category: "Seminar" },
  { id: 5, src: "/gallery/bs-img5.jpeg", title: "National Seminar", category: "Seminar" },
  { id: 6, src: "/gallery/bs-img6.jpeg", title: "National Seminar", category: "Seminar" },
  // { id: 7, src: "/gallery/bs-img7.jpeg", title: "Networking Session – Dubai Meet", category: "Conference" },
  { id: 8, src: "/gallery/bs-img8.jpeg", title: "National Seminar", category: "Seminar" },
  // { id: 9, src: "/gallery/bs-img.jpeg", title: "Collaborative Research Workshop", category: "Workshop" },
  // { id: 10, src: "/gallery/bs-img.jpeg", title: "Tech & Education Summit", category: "Conference" },
  // { id: 11, src: "/gallery/bs-img.jpeg", title: "Student Poster Presentation", category: "Workshop" },
  // { id: 12, src: "/gallery/bs-img.jpeg", title: "Closing Ceremony – Annual Meet", category: "Conference" },
];

const categories = ["All", "Seminar", "Workshop", "Webinar"];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };
  const goPrev = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
              Events Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Glimpses from our conferences, workshops, and academic events around the world.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mb-20">
            {filtered.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="break-inside-avoid group cursor-pointer rounded-xl overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index % 3 === 0 ? 'h-72' : index % 3 === 1 ? 'h-56' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-semibold text-white/80 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm mt-2">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
          {lightboxIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[60vh]">
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center p-6">
                <img
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].title}
                  className="max-h-[70vh] w-auto rounded-lg object-contain"
                />
                <p className="text-white/90 text-center mt-4 font-medium">
                  {filtered[lightboxIndex].title}
                </p>
                <span className="text-white/50 text-sm mt-1">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Events;
