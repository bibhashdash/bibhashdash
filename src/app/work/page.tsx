'use client';
import {useClientDimensions} from "@/utilities/clientDimensions";
import PortfolioData from "@/data/portfolioData";
import React from "react";
import {PortfolioGalleryCard} from "@/components/PortfolioGalleryCard";
import {PageWrapper} from "@/components/PageWrapper";
import {useRouter} from "next/navigation";

export default function Work() {
  const router = useRouter();

  useClientDimensions();
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-start w-full px-4 md:px-12 md:gap-6 h-full">
        <p className="w-full text-lg text-center md:text-left font-bold">My Projects</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {
            PortfolioData.map(item =>
              <PortfolioGalleryCard key={item.id} portfolioItem={item} onClick={id => router.push(`/work/${id.toString()}`)} />)
          }
        </div>
      </div>
    </PageWrapper>
  )
}
