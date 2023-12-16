'use client';

import {ButtonMain} from "@/components/buttons/ButtonMain";
import {TwitterIcon} from "@/icons/TwitterIcon";
import {EmailIcon} from "@/icons/EmailIcon";
import {LinkedInIcon} from "@/icons/LinkedInIcon";
import {useClientDimensions} from "@/utilities/clientDimensions";

export default function Home() {
  useClientDimensions();
  const handleButtonClick = () => {
    console.log("hello")
  }
  return (
    <main className="flex h-full py-4 flex-col items-center w-full">

    </main>
  )
}
