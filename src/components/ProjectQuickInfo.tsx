import {PortfolioDataModel} from "@/data/portfolioData";
import React from "react";

interface PortfolioTextContentProps {
  portfolioItem: PortfolioDataModel
}

export const ProjectQuickInfo = ({portfolioItem}:PortfolioTextContentProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <p className="w-full text-start flex gap-2"><b>Type: </b>{portfolioItem.workType} </p>
      <p className="w-full text-start"><b>Tech Stack: </b>{portfolioItem.techStack}</p>
      {
        portfolioItem.review && (
          <blockquote className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded-lg gap-4 self-center w-full">
            <p className="text-xl font-bold italic">&quot;{portfolioItem.review}&quot;</p>
            <footer className="flex flex-col items-center"><span>{portfolioItem.reviewAttribution}</span><b>{portfolioItem.reviewerRole}</b></footer>
            <a className="underline cursor-pointer text-sm" href={portfolioItem.projectLink} target="_blank">Visit Project↗️</a>
          </blockquote>
        )
      }
    </div>
  )
}
