import {CloseIcon} from "@/icons/CloseIcon";
import {useEffect} from "react";

interface AboutDrawerProps {
  isOpen: boolean,
  onClickClose: () => void,
}

export const AboutDrawer = ({onClickClose, isOpen}: AboutDrawerProps) => {

  useEffect(() => {
    if (document) {
      document.getElementById("content-div").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  })

  return (
    <div className="relative bg-gray-50 py-4 px-4 h-full w-full flex flex-col items-center"
         style={{
           transform: `translateY(${isOpen ? 0 : 100}%)`,
           transition: 'transform 0.5s ease-in-out',
           position: 'fixed',
           top: 0,
           right: 0,
           height: '100vh',
           width: '100vw',
           zIndex: 1000,
         }}
    >
      <div className="w-full max-w-2xl flex flex-col items-center overflow-auto no-scrollbar">
        <div className="flex justify-between items-center mb-4 fixed top-0 left-[50%] -translate-x-[50%] px-4 py-2 w-full max-w-2xl">
          <h1 className="font-display text-2xl text-stone-600">About Me</h1>
          <div onClick={onClickClose}>
            <CloseIcon/>
          </div>
        </div>

        <div id="content-div" className="h-full w-full mt-12 pb-8 flex flex-col items-center gap-4">
          <img src="/assets/about1.jpg" className="rounded-xl" alt={"family photo"}/>
          <p><b>TLDR:</b> Father, husband, software dev (obviously!), cyclist, runner, occasional radio presenter, and
            full-time worrier!</p>
          <div className="w-full flex flex-col items-center gap-4">

            <details className="w-full">
              <summary className="font-semibold">Origins</summary>
              <div className="flex flex-col gap-2">
                <img src="/assets/about2.jpg" className="rounded-xl" alt={"standing at SIncil Bank stadium"}/>
                <p id="origins">Born and raised in India, I have lived in the UK since 2014 and have worn many different professional and
                  personal hats in that time. Each chapter of my life has shaped and moulded me into the developer I am
                  today.</p>
                <p>I originally trained as <b>Journalist</b>, with a BA in Journalism and an MA in Sports
                  Journalism. I
                  was very lucky to have worked for two massive companies - The Press Association and the BBC - and a few
                  smaller websites. Notable achievements included covering a Cup Final at Wembley Stadium, and an
                  England-Australia ODI at Lord&apos;s Cricket Ground.</p>
              </div>
            </details>
            <details className="w-full">
              <summary className="font-semibold">Gear Shift</summary>
              <div className="flex flex-col gap-2">
                <img src="/assets/about3.jpg" className="rounded-xl" alt="person in a safety suit and mask"/>
                <p>In June 2016, following a short break, I embarked on a change of direction and attempting to find my
                  purpose, I found myself working as an Asbestos Surveyor/Analyst for one of the market leaders in hazardous
                  material testing, surveying, and consultancy. For 3.5 years I travelled the length and breadth of England
                  experiencing a life in the occupational health and construction industries I could scarcely have
                  imagined.</p>
                <p>I also discovered new limits to my physical capabilities going into environments not usually accessed by
                  journalists (or software devs!), including being part of the team that led the Demolition Survey of one of
                  Europe&apos;s biggest coal-fired power stations.</p>
              </div>
            </details>
            <details className="w-full">
              <summary className="font-semibold">Lockdown</summary>
              <div className="flex flex-col gap-2">
                <img src="/assets/about4.jpg" className="rounded-xl" alt="newspaper clipping"/>
                <p>Much like it was for the rest of the world, 2020 brought a massive challenge for me. However, it also gave
                  me the chance to volunteer in my local community. That eventually led to a job in the voluntary sector
                  where I led a project supporting black, Asian, and minority ethnic communities in the Humberside region.</p>
                <p>Among many other successes, I am proudest of having worked and supported some of the most vulnerable folks
                  in our communities - refugees and asylum seekers. There are few other things I have done in life that have
                  yielded as much emotional reward as this.</p>
              </div>
            </details>
            <details className="w-full">
              <summary className="font-semibold">Re-entry</summary>
              <div className="flex flex-col gap-2">
                <p>And so in the summer of 2022, just over 2 years after I first began learning to code, I finally landed a
                  job in the software industry. Thank you for making it this far! In many ways, though, this story is still
                  very much at the beginning!</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
