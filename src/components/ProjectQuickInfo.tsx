import {PortfolioDataModel} from "@/data/portfolioData";

interface PortfolioTextContentProps {
  portfolioItem: PortfolioDataModel
}

export const ProjectQuickInfo = ({portfolioItem}:PortfolioTextContentProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <p className="w-full text-start flex gap-2"><b>Type: </b>{portfolioItem.workType} </p>
      <p className="w-full text-start"><b>Tech Stack: </b>{portfolioItem.techStack}</p>
      <blockquote className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded-lg gap-4">
        <p className="text-xl font-bold italic">&quot;{portfolioItem.review}&quot;</p>
        <footer>- {portfolioItem.reviewAttribution}, <b>{portfolioItem.reviewerRole}</b></footer>
      </blockquote>
    </div>
  )
}
