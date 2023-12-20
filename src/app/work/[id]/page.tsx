'use client';

import {PortfolioData} from "@/data/portfolioData";
import {useParams} from "next/navigation";
import {PageWrapper} from "@/components/PageWrapper";
import React from "react";
import {ProjectQuickInfo} from "@/components/ProjectQuickInfo";
import {BackIcon} from "@/components/BackIcon";

export default function ProjectDetailsPage() {
  const {id} = useParams();
  const project = PortfolioData.find(item => item.id.toString() === id);
  return (
    <PageWrapper>
      {
        project ? (
          <div className="flex flex-col items-center justify-start w-full px-4 md:px-12 md:gap-6 h-full pb-12">
            <div className="flex gap-4 w-full">
              {/*<BackIcon />*/}
              <p className="w-full text-lg font-bold">{project.title}</p>
            </div>
            <div className="flex flex-col items-center justify-start w-full lg:grid lg:grid-cols-12 lg:gap-6">
              <img src={project.imageSource} className="rounded-lg col-span-6" />
              <div className="col-span-6">
                <ProjectQuickInfo portfolioItem={project} />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <p><b>Description:</b> {project.description}</p>
              <a className="underline w-full text-start font-bold cursor-pointer" href={project.projectLink} target="_blank">Visit Project</a>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <p>We are having some trouble loading this content for you. Please refresh the page or try again in a bit.</p>
          </div>
        )
      }
    </PageWrapper>
  )
}
