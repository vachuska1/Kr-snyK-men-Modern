"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Real stone work photos - now 45 images
const photos = [
  // First batch (1-10)
  {
    id: 1,
    src: "/images/1.jpg",
    alt: "Historické náměstí s kamennou dlažbou",
    title: "Kamenná dlažba - historické náměstí",
  },
  {
    id: 2,
    src: "/images/2.jpg",
    alt: "Parkové cesty z kamene",
    title: "Kamenné parkové cesty",
  },
  {
    id: 3,
    src: "/images/3.jpg",
    alt: "Městské náměstí s kamennou dlažbou",
    title: "Městská kamenná dlažba",
  },
  {
    id: 4,
    src: "/images/4.jpg",
    alt: "Detailní pohled na kamenné kostky",
    title: "Kamenné kostky - detail",
  },
  {
    id: 5,
    src: "/images/5.jpg",
    alt: "Moderní kamenná dlažba s ozeleněním",
    title: "Moderní kamenné prvky",
  },
  {
    id: 6,
    src: "/images/6.jpg",
    alt: "Geometrická kamenná dlažba",
    title: "Geometrické vzory z kamene",
  },
  {
    id: 7,
    src: "/images/7.jpg",
    alt: "Veřejné prostranství s kamennou dlažbou",
    title: "Veřejné prostranství",
  },
  {
    id: 8,
    src: "/images/8.jpg",
    alt: "Velkoformátové kamenné desky",
    title: "Velkoformátové kamenné desky",
  },
  {
    id: 9,
    src: "/images/9.jpg",
    alt: "Městská ulice s kamennou dlažbou",
    title: "Městská kamenná dlažba",
  },
  {
    id: 10,
    src: "/images/10.jpg",
    alt: "Kamenný obklad budovy",
    title: "Kamenný obklad a dlažba",
  },
  // Second batch (11-20)
  {
    id: 11,
    src: "/images/11.jpg",
    alt: "Dekorativní kamenná dlažba ve dvoře",
    title: "Dekorativní kamenné vzory",
  },
  {
    id: 12,
    src: "/images/12.jpg",
    alt: "Historická ulice s kamennou dlažbou",
    title: "Historická kamenná dlažba",
  },
  {
    id: 13,
    src: "/images/13.jpg",
    alt: "Moderní nábřeží s kamennými lavicemi",
    title: "Kamenné lavice a dlažba",
  },
  {
    id: 14,
    src: "/images/14.jpg",
    alt: "Geometrické kamenné vzory",
    title: "Propojovací kamenné prvky",
  },
  {
    id: 15,
    src: "/images/15.jpg",
    alt: "Kamenná fontána s vodními prvky",
    title: "Interaktivní kamenná fontána",
  },
  {
    id: 16,
    src: "/images/16.jpg",
    alt: "Kombinace kamenné a betonové dlažby",
    title: "Smíšené kamenné povrchy",
  },
  {
    id: 17,
    src: "/images/17.jpg",
    alt: "Kamenné obrubníky v procesu výstavby",
    title: "Kamenné obrubníky a infrastruktura",
  },
  {
    id: 18,
    src: "/images/18.jpg",
    alt: "Kamenné schody s žulovými stupni",
    title: "Kamenné schody a obklady",
  },
  {
    id: 19,
    src: "/images/19.jpg",
    alt: "Moderní kamenná lavice",
    title: "Designová kamenná lavice",
  },
  {
    id: 20,
    src: "/images/20.jpg",
    alt: "Noční pohled na kamenné náměstí",
    title: "Osvětlené kamenné náměstí",
  },
  // Third batch (21-30)
  {
    id: 21,
    src: "/images/21.jpg",
    alt: "Noční náměstí s fontánou a kamennou dlažbou",
    title: "Osvětlené náměstí s fontánou",
  },
  {
    id: 22,
    src: "/images/22.jpg",
    alt: "Kamenný rošt kolem stromu",
    title: "Dekorativní kamenné prvky",
  },
  {
    id: 23,
    src: "/images/23.jpg",
    alt: "Parkové cesty s kombinací materiálů",
    title: "Smíšené kamenné povrchy",
  },
  {
    id: 24,
    src: "/images/24.jpg",
    alt: "Umělecká instalace na kamenné dlažbě",
    title: "Kamenná dlažba s uměním",
  },
  {
    id: 25,
    src: "/images/25.jpg",
    alt: "Kamenné kostky na městském náměstí",
    title: "Městské kamenné kostky",
  },
  {
    id: 26,
    src: "/images/26.jpg",
    alt: "Moderní budova s kamennou dlažbou",
    title: "Velkoformátové kamenné desky",
  },
  {
    id: 27,
    src: "/images/27.jpg",
    alt: "Historické náměstí s kamennými lavicemi",
    title: "Kamenné lavice a socha",
  },
  {
    id: 28,
    src: "/images/28.jpg",
    alt: "Barevná kamenná dlažba u moderní budovy",
    title: "Vícebarevné kamenné vzory",
  },
  {
    id: 29,
    src: "/images/29.jpg",
    alt: "Noční osvětlení kamenného náměstí",
    title: "Večerní kamenná dlažba",
  },
  {
    id: 30,
    src: "/images/30.jpg",
    alt: "Nábřežní promenáda s kamennými lavicemi",
    title: "Kamenné nábřeží",
  },
  // Fourth batch (31-40)
  {
    id: 31,
    src: "/images/31.jpg",
    alt: "Vícebarevná kamenná dlažba na náměstí",
    title: "Moderní dlažba s barevnými kostkami",
  },
  {
    id: 32,
    src: "/images/32.jpg",
    alt: "Kamenná dlažba s vodními tryskami",
    title: "Interaktivní fontána v dlažbě",
  },
  {
    id: 33,
    src: "/images/33.jpg",
    alt: "Kamenná dlažba s rampou a zábradlím",
    title: "Kamenná dlažba a bezbariérový přístup",
  },
  {
    id: 34,
    src: "/images/34.jpg",
    alt: "Moderní kamenné schody",
    title: "Kamenné schody s čistými liniemi",
  },
  {
    id: 35,
    src: "/images/35.jpg",
    alt: "Kamenná dlažba a obrubníky u silnice",
    title: "Kamenné cesty a infrastruktura",
  },
  {
    id: 36,
    src: "/images/36.jpg",
    alt: "Detail přechodu mezi dvěma typy dlažby",
    title: "Designové přechody v dlažbě",
  },
  {
    id: 37,
    src: "/images/37.jpg",
    alt: "Kamenná dlažba před moderní budovou s fontánou",
    title: "Kamenná dlažba a vodní prvky",
  },
  {
    id: 38,
    src: "/images/38.jpg",
    alt: "Velké kamenné desky na chodníku",
    title: "Velkoformátová kamenná dlažba",
  },
  {
    id: 39,
    src: "/images/39.jpg",
    alt: "Interiérové kamenné schodiště",
    title: "Kamenné schodiště v interiéru",
  },
  {
    id: 40,
    src: "/images/40.jpg",
    alt: "Interiérová kamenná podlaha",
    title: "Leštěná kamenná podlaha",
  },
  // Fifth batch (41-45)
  {
    id: 41,
    src: "/images/41.jpg",
    alt: "Interiérové schodiště s kamennými stupni",
    title: "Moderní kamenné schodiště",
  },
  {
    id: 42,
    src: "/images/42.jpg",
    alt: "Detail kamenné podlahy a přechodu",
    title: "Kamenná podlaha s kontrastním prvkem",
  },
  {
    id: 43,
    src: "/images/43.jpg",
    alt: "Dlažba z kamenných kostek na náměstí",
    title: "Rozsáhlá kamenná dlažba na náměstí",
  },
  {
    id: 44,
    src: "/images/44.jpg",
    alt: "Pohled shora na kamenné schodiště",
    title: "Kamenné schodiště - detail",
  },
  {
    id: 45,
    src: "/images/45.jpg",
    alt: "Historická kamenná ulice v slunečním svitu",
    title: "Historická kamenná ulice",
  },
]

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <>
      {/* Gallery Grid - 5 columns layout, now with 45 images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="aspect-square cursor-pointer group overflow-hidden rounded-lg bg-stone-100 shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openModal(index)}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal/Slider */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <div className="flex items-center justify-center">
              <Image
                src={photos[selectedImage].src || "/placeholder.svg"}
                alt={photos[selectedImage].alt}
                width={800}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-center">
              <p className="text-sm font-medium">{photos[selectedImage].title}</p>
              <p className="text-xs opacity-75">
                {selectedImage + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
