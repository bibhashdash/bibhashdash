import {PortfolioDataModel} from "@/data/portfolioData";

interface PortfolioGalleryCardProps {
  portfolioItem: PortfolioDataModel
  onClick: (id: number) => void,
}

export const PortfolioGalleryCard = ({portfolioItem, onClick}: PortfolioGalleryCardProps) => {
  return (
    <div onClick={() => onClick(portfolioItem.id)} className="rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
      <img src={portfolioItem.imageSource} className="rounded-lg"/>
      <p className="font-bold text-sm sm:text-lg">{portfolioItem.title}</p>
    </div>
  )
}
