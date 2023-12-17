'use client';

import {useClientDimensions} from "@/utilities/clientDimensions";

export default function About() {
useClientDimensions();
  return (
    <main className="flex h-full flex-col w-full">
      <h1>About Me</h1>
    </main>
  )
}
