'use client';

import {useClientDimensions} from "@/utilities/clientDimensions";
import {ContentCardWrapper} from "@/components/ContentCardWrapper";
import {PageWrapper} from "@/components/PageWrapper";

export default function About() {
  useClientDimensions();

  return (
    <PageWrapper>
      <ContentCardWrapper title={'Hello World!'} imageSource={"/assets/about1.jpg"}>
        <div className="py-4">
          <p>I am a <b>Software Developer</b> specialising in Front End Web Development. Self-taught owing to the vagaries
            of time under lockdown.</p><br/>
          <p>I love bringing ideas and designs to life on the web. My tech stack from professional and personal projects
            includes, <b>HTML, CSS, Javascript, React, Next JS, Vue JS, Tailwind CSS, .NET MAUI, C#, Kotlin</b>, and even no-code
            platforms such as <b>Webflow</b>.</p><br/>
          <p>If you would like a taste of the work I have done please feel free to browse <a className="underline" href={"/work"}><b>my projects</b></a>. Got a question or
            just want to discuss a project of yours? Drop me <a className="underline" href="mailto:bibhashdash@gmail.com"><b>an
              email</b></a>.</p>
          <br/>
          <p>In a previous professional life I&apos;ve worked as a <b>Sports Journalist</b> (8 years), <b>Asbestos Surveyor</b> (3 years), and as a <b>Project Leader</b> in a charity (1.5 years)</p><br/>
          <p>When not wrestling <code>div</code> tags, I can be usually found enjoying family life with my wife and two kids in lovely East Yorkshire, and at
            other times wrestling against a hill on my bike.</p>
        </div>
      </ContentCardWrapper>
    </PageWrapper>
  )
}
