import {TwitterIcon} from "@/icons/TwitterIcon";
import {EmailIcon} from "@/icons/EmailIcon";
import {LinkedInIcon} from "@/icons/LinkedInIcon";

export const MainHeader = () => {
  return (
    <div className="flex w-full justify-between px-4 py-2 border-b-4 border-slate-900 sm:mb-4">
      <div className="flex flex-col gap-2 sm:gap-6">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h1 className="text-2xl sm:text-6xl font-display">Bibhash Dash</h1>
          <h2 className="text-sm sm:text-xl">Software Developer</h2>
        </div>
        <div className="flex gap-6">
          <a href={'https://twitter.com/bibhashdash'} target={"_blank"}><TwitterIcon /></a>
          <a href="mailto:bibhashdash@gmail.com"><EmailIcon /></a>
          <a href={'https://www.linkedin.com/in/bibhash-dash-57307921/'} target={"_blank"}><LinkedInIcon /></a>
        </div>
      </div>
      <div>
        <img alt="hero image" src="/assets/heroImage2.jpg" className="w-20 sm:w-28 md:w-36 rounded-[50%] border-4 border-slate-200"/>
      </div>
    </div>
  )
}
