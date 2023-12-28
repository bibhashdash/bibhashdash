'use client';

import PortfolioData from "@/data/portfolioData";
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
            <div className="flex gap-4 w-full items-center">
              <p className="w-full text-lg font-bold">{project.title}</p>
              {
                project.id === 3 && (
                  <a
                    href="https://www.producthunt.com/posts/perfect-score?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-perfect&#0045;score"
                    target="_blank"><img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431627&theme=light"
                    alt="Perfect&#0032;Score - Hangman&#0032;for&#0032;Football&#0032;team&#0032;names | Product Hunt"
                    className="w-[250px] h-[54px]"
                    /></a>
                )
              }
            </div>
            <div className="flex flex-col items-center justify-start w-full lg:grid lg:grid-cols-12 lg:gap-6">
              <img alt="project screenshots" src={project.imageSource} className="rounded-lg col-span-6"/>
              <div className="col-span-6">
                <ProjectQuickInfo portfolioItem={project}/>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <p><b>Description:</b> {project.description}</p>
              <a className="w-full text-start font-bold cursor-pointer flex flex-row underline"
                 href={'/work'}><BackIcon/> Back to all projects</a>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <p>We are having some trouble loading this content for you. Please refresh the page or try again in a
              bit.</p>
          </div>
        )
      }
    </PageWrapper>
  )
}
