interface PortfolioTextContentProps {
  workType: string,
  techStack: string,
  description: string
}

export const PortfolioTextContent = ({techStack, workType, description}:PortfolioTextContentProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <p className="w-full text-start"><b>Type: </b>{workType}</p>
      <p className="w-full text-start"><b>Tech Stack: </b>{techStack}</p>
      <p className="w-full text-start"><b>Description: </b>{description}</p>
    </div>
  )
}
