'use client';
import {useClientDimensions} from "@/utilities/clientDimensions";
import {PageWrapper} from "@/components/PageWrapper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {ContentCardWrapper} from "@/components/ContentCardWrapper";
import {PortfolioData} from "@/data/portfolioData";
import {PortfolioTextContent} from "@/components/PortfolioTextContent";
export default function Work() {

  useClientDimensions();
  return (
    <PageWrapper>
      <Carousel>
        {
          PortfolioData.map(item => (
            <ContentCardWrapper key={item.id} title={item.title} imageSource={item.imageSource}>
              <PortfolioTextContent workType={item.workType} techStack={item.techStack} description={item.description} />
            </ContentCardWrapper>
          ))
        }
      </Carousel>
    </PageWrapper>
  )
}
