import {TwitterIcon} from "@/icons/TwitterIcon";
import {EmailIcon} from "@/icons/EmailIcon";
import {LinkedInIcon} from "@/icons/LinkedInIcon";

export const MainHeader = () => {
  return (
    <div className="flex w-full justify-between px-4 py-2 border-b-4 border-slate-900">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-display">Bibhash Dash</h1>
          <h2 className="text-sm">Software Developer</h2>
        </div>
        <div className="flex gap-6">
          <TwitterIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div>
        <img alt="hero image" src="/assets/heroimage.jpg" className="w-20 rounded-[50%] border-4 border-slate-200"/>
      </div>
    </div>
  )
}
