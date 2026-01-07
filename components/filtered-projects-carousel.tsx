"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { projectsData } from "@/lib/projects-data"

interface FilteredProjectsCarouselProps {
  language: "sr" | "en" | "de"
  filterTags: string[]
  title: string
  subtitle?: string
}

export function FilteredProjectsCarousel({ language, filterTags, title, subtitle }: FilteredProjectsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()

  // Filter projects that have at least one matching tag
  const filteredProjects = projectsData.filter((project) => {
    const projectTags = project.tags[language]
    return projectTags.some((tag) => filterTags.includes(tag))
  })

  // If no projects match the filter, don't render anything
  if (filteredProjects.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-balance">{title}</h2>
        {subtitle && (
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-pretty">{subtitle}</p>
        )}

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.map((project, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title[language]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags[language].map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{project.title[language]}</h3>
                      {project.desc[language] && (
                        <p className="text-muted-foreground leading-relaxed">{project.desc[language]}</p>
                      )}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 md:-left-16" />
            <CarouselNext className="-right-12 md:-right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
