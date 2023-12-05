'use client';

import {ButtonMain} from "@/components/buttons/ButtonMain";
import {TwitterIcon} from "@/icons/TwitterIcon";
import {EmailIcon} from "@/icons/EmailIcon";
import {LinkedInIcon} from "@/icons/LinkedInIcon";

export default function Home() {
  const handleButtonClick = () => {
    console.log("hello")
  }
  return (
    <main className="flex min-h-screen max-h-full flex-col items-center justify-evenly w-full">
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-display text-5xl text-stone-600">
          Bibhash Dash
        </h1>
        <h2 className="text-stone-600">
          Software Developer
        </h2>
      </header>

      <div>
        <div>
          <img
            alt="hero image"
            src="/assets/heroimage.jpg"
            width={150}
            height={300}
            className="hero-image"
            style={{
            borderRadius: "50%"}}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
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
    </main>
  )
}
