// Carousel.tsx
"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const imageUrls = [
  '/speakers/nandini.JPG',
  '/speakers/rahul.jpeg',
  '/speakers/raman.jpg',
  '/speakers/sayandeep.jpeg',
  '/speakers/soumyadeep.jpeg',
  '/speakers/pani_da.jpg',
  '/speakers/ansh.jpg',
  '/speakers/punit.jpg',
]

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageUrls.map((url, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent>
                  <Image
                    src={url}
                    alt="Carousel Slides"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover aspect-3/4 rounded-2xl shadow-sm"
                /> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
