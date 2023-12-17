'use client';

import {useClientDimensions} from "@/utilities/clientDimensions";
import {PageWrapper} from "@/components/PageWrapper";
import React from "react";

export default function Career() {
  useClientDimensions();
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-start w-full px-4 md:px-12 md:gap-6 h-full">
        <p className="w-full text-lg text-center md:text-left font-bold">The Story So Far</p>
        <div className="w-full flex flex-col gap-6 mt-2">
          <p><b>August 2022 - Present: </b>Junior Software Engineer at Twelve Oaks Software</p>
          <p><b>June 2020 - August 2022: </b>Learning to code and freelance website building</p>
          <p><b>November 2020 - August 2022: </b>BAME Wellbeing Coordinator at HEY Smile Foundation</p>
          <p><b>April 2017 - November 2020: </b>Asbestos Surveyor and Analyst at Lucion Services</p>
          <p><b>June 2009 - April 2017: </b>Sports Journalist in freelance and full-time roles. Employers include The Press Association and BBC Sport</p>
        </div>
      </div>

    </PageWrapper>
  )
}
