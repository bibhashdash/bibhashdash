import {PortfolioDataModel} from "@/data/portfolioData";
import React from "react";

interface PortfolioGalleryCardProps {
  portfolioItem: PortfolioDataModel
  onClick: (id: number) => void,
}

export const PortfolioGalleryCard = ({portfolioItem, onClick}: PortfolioGalleryCardProps) => {
  return (
    <div onClick={() => onClick(portfolioItem.id)} className="rounded-lg py-4 flex flex-col items-center gap-2 cursor-pointer shadow-md">
      <img alt={'portfolio-project-screenshots'} src={portfolioItem.imageSource} className="rounded-lg"/>
      <div className="flex gap-2 items-center">
        <p className="font-bold text-sm sm:text-lg text-center">{portfolioItem.title}</p>
        {
          portfolioItem.id === 3 && (
            <a
              href="https://www.producthunt.com/posts/perfect-score?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-perfect&#0045;score"
              target="_blank"><img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431627&theme=light"
              alt="Perfect&#0032;Score - Hangman&#0032;for&#0032;Football&#0032;team&#0032;names | Product Hunt"
              className="w-[120px] h-[30px]"
            /></a>
          )
        }
      </div>
    </div>
  )
}
