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
    <main className="flex h-full py-4 flex-col justify-center items-center w-full md:flex-row-reverse md:justify-center md:gap-16">
        <div className="h-fit md:flex md:items-center md:h-fit">
          <img
            alt="hero image"
            src="/assets/heroimage.jpg"
            className="w-56 h-72 border-4 border-slate-50 lg:w-[300px] lg:h-96"
            style={{
            borderRadius: "50%"}}
          />
        </div>

      <div className="flex h-full flex-col items-center justify-evenly md:h-fit md:gap-12">
        <header className="flex flex-col items-center gap-4">
          <h1 className="font-display text-5xl sm:text-7xl text-stone-600">
            Bibhash Dash
          </h1>
          <h2 className="text-stone-600 sm:text-2xl">
            Software Developer
          </h2>
        </header>
        <div className="flex gap-4">
          <ButtonMain text={"About"} type={"outlined"} onClickButton={handleButtonClick} />
          <ButtonMain text={"Work"} type={"filled"} onClickButton={handleButtonClick} />
        </div>

        <div className="flex justify-evenly w-fit gap-8">
          <a href="https://twitter.com/bibhashdash" target="_blank">
            <TwitterIcon />
          </a>
          <EmailIcon />
          <a href="https://www.linkedin.com/in/bibhash-dash-57307921/" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </main>
  )
}
