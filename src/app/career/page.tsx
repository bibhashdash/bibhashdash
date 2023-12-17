'use client';

import {useClientDimensions} from "@/utilities/clientDimensions";
import {PageWrapper} from "@/components/PageWrapper";
import React from "react";

export default function Career() {
  useClientDimensions();
  return (
    <PageWrapper>
      <p className="w-full text-lg text-center md:text-left font-bold">The Story So Far</p>
    </PageWrapper>
  )
}
