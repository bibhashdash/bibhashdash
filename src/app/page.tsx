'use client';

import {useClientDimensions} from "@/utilities/clientDimensions";
import {ContentCardWrapper} from "@/components/ContentCardWrapper";

export default function About() {
  useClientDimensions();
  return (
    <main className="flex h-full flex-col w-full">
      <ContentCardWrapper title={"Be Useful"} imageSource={"/assets/placeholder.jpg"}>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or a typeface without relying on...</p>
      </ContentCardWrapper>
    </main>
  )
}
